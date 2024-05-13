import { createSVGWindow } from "svgdom";
import { SVG, registerWindow } from "@svgdotjs/svg.js";

const main = async () => {
  // returns a window with a document and an svg root node
  const window = createSVGWindow();
  const document = window.document;

  // register window and document
  registerWindow(window, document);

  // create canvas
  const canvas = SVG(document.documentElement);

  // use svg.js as normal
  canvas.rect(100, 100).fill("yellow").move(50, 50);

  // get your svg as string
  console.log(canvas.svg());
  // or
  console.log(canvas.node.outerHTML);
};
main();
