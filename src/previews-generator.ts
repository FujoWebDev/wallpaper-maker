import config from "../config.json";

console.log(config);
const sizeTemplate = document.querySelector(
  "#size-template"
) as HTMLTemplateElement;

const addedResolutions: number[] = [];
config.sizes
  .map((size) => {
    const [width, height] = size.split("x");
    const resolution = parseInt(width) / parseInt(height);
    console.log(resolution);
    if (addedResolutions.includes(resolution)) {
      return;
    }
    console.log(document.querySelector("#size-previews"));
    const preview = sizeTemplate.content.cloneNode(true) as DocumentFragment;
    (preview.children[0] as HTMLElement).style.setProperty(
      "--width",
      width + "px"
    );
    (preview.children[0] as HTMLElement).style.setProperty(
      "--height",
      height + "px"
    );

    addedResolutions.push(resolution);
    document.querySelector("#size-previews")?.appendChild(preview);
  })
  .join("\n");
