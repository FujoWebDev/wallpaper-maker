import "./style.css";
const modules = import.meta.glob("/wallpapers/**/index.html");

function changeWallpaper(e: Event) {
  const button = e.target as HTMLButtonElement;
  const path = button.dataset.path!;

  document.querySelectorAll("iframe").forEach((iframe) => (iframe.src = path));
}

document.querySelector("#wallpaper-selection")!.innerHTML = Object.keys(modules)
  .map((wallpaperPath) => {
    const wallpaperName = wallpaperPath.substring(
      "/wallpapers/".length,
      wallpaperPath.length - "/index.html".length
    );
    return `<button data-path=${wallpaperPath}>${wallpaperName}</button>`;
  })
  .join("\n");

document.querySelectorAll("#wallpaper-selection button").forEach((b) => {
  b.addEventListener("click", changeWallpaper);
});
