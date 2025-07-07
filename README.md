# Wallpapers Generator

Generate and preview responsive wallpapers in multiple sizes using HTML and CSS.

## How to Use

### Install

Run `npm install`. You will need `node 22` to run this code.

### Wallpaper preview

To see a preview of your wallpapers in different sizes with live update run
`npm run dev` and go to `http://localhost:5173/` or whatever address is outputted
in your console.

### Wallpaper generation

To generate wallpapers, you can run the generator using: `npm run generate`.

Wallpapers will be generated in the `/generated/` directory.

## Creating a Wallpaper

To create a wallpaper add a folder under `/wallpapers/` with an `index.html` file.
You can use any HTML and CSS (and probably even JavaScript) to create the wallpaper
of your dreams. You can see live previews by running `npm run dev`.

The generated wallpapers folder structure will match your folder structure. Every folder with
an `index.html` file will be considered a wallpaper.

### Reusing HTML code

You can reuse HTML code with this special tag: `<load src="../html_to_include.html" />`. See
[vite-plugin-html-inject](https://www.npmjs.com/package/vite-plugin-html-inject) for details.

## Adding Credits to Wallpapers

You can optionally add a `credits.txt` file within a wallpaper folder, which will be
copied as is to the generated wallpapers folder.

## Changing Wallpaper Sizes

You can add or remove wallpaper sizes by adding them in `config.json`.
