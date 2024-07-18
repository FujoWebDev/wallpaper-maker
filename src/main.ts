import "./style.css";
const modules = import.meta.glob("/wallpapers/**/index.html");

function changeWallpaper(e: Event | string) {
  const path =
    typeof e == "string" ? e : (e.target as HTMLButtonElement).dataset.path!;

  document.querySelectorAll("iframe").forEach((iframe) => (iframe.src = path));
  sessionStorage.setItem("currentWallpaperPath", path);
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

const currentWallpaper = sessionStorage.getItem("currentWallpaperPath");
if (currentWallpaper) {
  changeWallpaper(currentWallpaper);
}
