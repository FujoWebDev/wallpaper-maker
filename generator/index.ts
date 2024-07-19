import { chromium, devices } from "playwright";
import config from "../config.json";
import { glob } from "node:fs/promises";
// import { setTimeout } from "node:timers/promises";
import { join, dirname } from "node:path";

console.log("Generating wallpapers for the following sizes:", config.sizes);

const wallpapers: string[] = [];
for await (const entry of glob("../wallpapers/**/index.html"))
  wallpapers.push(entry);

console.log("Generating wallpapers the following wallpapers", wallpapers);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

for (const size of config.sizes) {
  const [width, height] = size.split("x");
  page.setViewportSize({
    width: parseInt(width),
    height: parseInt(height),
  });
  for (const wallpaper of wallpapers) {
    const dirName = dirname(wallpaper).substring(
      dirname(wallpaper).lastIndexOf("/") + 1
    );
    const wallpaperPath = join(process.cwd(), wallpaper);
    await page.goto("file://" + wallpaperPath);
    await page.screenshot({ path: `../generated/${dirName}/${size}.png` });
  }
}

// // The actual interesting bit
// await context.route("**.jpg", (route) => route.abort());

// assert((await page.title()) === "Example Domain"); // 👎 not a Web First assertion

// // Teardown
// await context.close();
await browser.close();
