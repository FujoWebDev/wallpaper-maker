import { globSync } from "node:fs";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  // Make paths relative so imports will work correctly
  base: "",
  plugins: [
    injectHTML(),
    viteStaticCopy({
      targets: [
        {
          src: "wallpapers/**/credits.txt",
          dest: ".",
          rename: (_fileName, _extension, path) => {
            return path.substring(import.meta.dirname.length + 1);
          },
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      // Create a new standalone page for every wallpaper. Without this the generate CSS fucks up
      // and either misses assets or mangles the CSS together.
      input: globSync("./wallpapers/**/index.html"),
    },
  },
});
