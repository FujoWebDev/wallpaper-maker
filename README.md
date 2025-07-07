# Wallpapers Generator

Generate and preview responsive wallpapers in multiple sizes using HTML and CSS.

## How to Use

### Install

Run `npm install`. You will need at least `node 22` to run this code.

### Wallpaper preview

To see a preview of your wallpapers in all generated sizes with live update run
`npm run dev` and go to `http://localhost:5173/` or whatever address is outputted
in your console.

You can also see each single wallpaper full page by appending its path
at the end of the URL. For example
`http://localhost:5173/wallpapers/characters-github/index.html`.

## Creating a Wallpaper

To create a wallpaper add a folder under `/wallpapers/` with an `index.html` file.
You can use any HTML and CSS (and probably even JavaScript) to create the wallpaper
of your dreams. You can see live previews by running `npm run dev`.

The generated wallpapers folder structure will match your folder structure. Every folder with
an `index.html` file will be considered a wallpaper.

### Styling a Wallpaper

Literally just style them as if they were websites! You can use media queries to help you
create special cases or position things at different sizes. The main preview will show you
how things look at different proportions all at the same time.

### Wallpaper generation

To generate wallpapers, you can run the generator using: `npm run generate`.

Wallpapers will be generated in the `/generated/` directory.

### Reusing HTML code

You can reuse HTML code with this special tag: `<load src="../html_to_include.html" />`. See
[vite-plugin-html-inject](https://www.npmjs.com/package/vite-plugin-html-inject) for details.
This can be useful to create multiple background that share part of the design, maybe with different
CSS variables or assets for colors.

Other ways to import files (like shared CSS) work as expected.

## Adding Credits to Wallpapers

You can optionally add a `credits.txt` file within a wallpaper folder, which will be
copied as is to the generated wallpapers folder.

## Changing Wallpaper Sizes

You can add or remove wallpaper sizes by adding them in `config.json`.

#### About husky hooks

This repo uses Husky git hooks to prevent accidental commits or pushes of
/wallpapers files to upstream branches to keep FujoCoded from accidentally
pushing internal assets to our open source repo. If you try to commit or push
such files on a branch intended for upstream, the action will be blocked.

If you're trying to submit a new public example (and know what you're doing)
you can bypass the check by using the -n option on our commands.
