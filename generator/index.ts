import { chromium, devices } from "playwright";
import config from "../config.json";
import { glob, copyFile, constants } from "node:fs/promises";
// import { setTimeout } from "node:timers/promises";
import { join, dirname } from "node:path";

console.log("Generating wallpapers for the following sizes:", config.sizes);

const wallpapers: string[] = [];
for await (const entry of glob("../dist/wallpapers/**/index.html")) {
  const generateOnly = []; // ["../dist/wallpapers/we-can-ship-it/"];
  if (
    generateOnly.length == 0 ||
    generateOnly.find((validPath) => entry.startsWith(validPath))
  ) {
    wallpapers.push(entry);
  }
}

console.log("Generating the following wallpapers:", wallpapers);

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-web-security"], // add this to disable cors, which causes problem with mask-image and local files
});

const page = await browser.newPage({
  bypassCSP: true, // add this to disable cors, which causes problem with mask-image and local files
});

for (const size of config.sizes) {
  const [width, height] = size.split("x");
  page.setViewportSize({
    width: parseInt(width),
    height: parseInt(height),
  });
  for (const wallpaper of wallpapers) {
    console.log(`Generating ${wallpaper} in size ${size}.`);
    const dirName = dirname(wallpaper).substring(
      dirname(wallpaper).lastIndexOf("wallpapers/") + "wallpapers/".length
    );
    const wallpaperPath = join(process.cwd(), wallpaper);
    await page.goto("file://" + wallpaperPath);
    await page.waitForLoadState("networkidle");
    //    if (wallpaper.includes("github")) {
    //       await setTimeout(100000);
    //    }
    await await page.screenshot({
      path: `../generated/${dirName}/${size}.png`,
    });
    console.log(`Saved at ../generated/${dirName}/${size}.png.`);
  }
}

await browser.close();

// Now copy all the credits
for (const wallpaper of wallpapers) {
  const creditsPath = join(dirname(wallpaper), "credits.txt");
  const destDir = dirname(creditsPath).substring(
    dirname(creditsPath).lastIndexOf("wallpapers/") + "wallpapers/".length
  );

  try {
    await copyFile(creditsPath, join("../generated/", destDir, "credits.txt"));
  } catch (err) {
    if (err.code === "ENOENT") {
      // The credits.txt file does not exist
      continue;
    }
  }
  console.log(`Copied credits for ${wallpaper}`);
}
