# Wallpapers Generator

Generate and preview responsive wallpapers in multiple sizes using HTML and CSS.

## How to Use

### Install

Run `npm install`. To run the generator you will need `node 22`, but you can
create wallpapers with any modern version of node.

### Wallpaper preview

To see a preview of your wallpapers in different sizes with live update run
`npm run dev` and go to `http://localhost:5173/` or whatever address is outputted
in your console.

### Wallpaper generation

To generate wallpapers, you can run the generator using: `npm run --prefix generator/ generate`. Remember: you must use `node 22`.

Wallpapers will be generated in the `/generated/` directory.

## Creating a Wallpaper

To create a wallpaper add a folder under `/wallpapers/` with an `index.html` file.
You can use any HTML and CSS (and probably even JavaScript) to create the wallpaper
of your dreams. You can see live previews by running `npm run dev`.

## Changing Wallpaper Sizes

You can add or remove wallpaper sizes by adding them in `config.json`.
