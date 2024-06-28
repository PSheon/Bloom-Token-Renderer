import { createSVGWindow } from "svgdom";
import { SVG, Rect, registerWindow, Color, Spring } from "@svgdotjs/svg.js";

const main = async () => {
  const { random } = Math;

  // returns a window with a document and an svg root node
  const window = createSVGWindow();
  const document = window.document;

  // register window and document
  registerWindow(window, document);

  // create canvas
  const canvas = SVG(document.documentElement).size(725, 1040);

  // create a background
  canvas.rect(725, 1040).attr({ fill: "#201F1F", rx: 32 });

  // create a cover background
  const coverGradient = canvas
    .gradient("linear", function (add) {
      add.stop(0, "#FF6B6B");
      add.stop(1, "#FF9898");
    })
    .from(0, 0)
    .to(-1, 1);
  canvas
    .rect(600, 630)
    .move(64, 64)
    .attr({ fill: coverGradient, rx: 32, opacity: 0.8 });
  const CoverOverlayGradient = canvas
    .gradient("linear", function (add) {
      add.stop(0, "#F4665D");
      add.stop(1, "#F45DB8");
    })
    .from(0, 1)
    .to(1, 0);
  canvas.rect(600, 630).move(64, 64).attr({
    fill: CoverOverlayGradient,
    rx: 32,
    opacity: 0.8,
  });

  // Cover deco
  for (let i = 0; i < 12; ++i) {
    let fillColor = "#201F1F";
    canvas
      .polygon("50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40")
      .fill(fillColor)
      .stroke({
        width: 15,
        color: fillColor,
        opacity: 0.4,
      })
      .center(108 + random() * 540, 108 + random() * 540);
  }

  // create Title
  canvas.text(function (add) {
    add
      .tspan("Hello, World!")
      .font({ size: 36, fill: "#FFCACA", family: "Inconsolata" })
      .amove(64, 780);
    add
      .tspan("subtitle!")
      .font({ size: 24, fill: "#FFCACA", family: "Inconsolata" })
      .amove(64, 840);
  });

  // create a footer
  canvas.text(function (add) {
    add
      .tspan("Footer")
      .font({ size: 36, fill: "#FFCACA", family: "Inconsolata" })
      .amove(64, 980);
  });

  // create a corner logo
  let logoPathData =
    "M 1596.45 793.46 C 1593.53 581.6800000000001 1417.89 410.41 1206.1 412.57000000000005 C 1134.53 413.30000000000007 1067.6299999999999 433.49000000000007 1010.4199999999998 468.1 L 848.36 235.8 C 840.79 224.95000000000002 823.75 230.31 823.75 243.54000000000002 L 823.75 777.8 L 824.27 778.75 C 823.93 785.43 823.75 792.15 823.75 798.91 C 823.75 1012.3 996.73 1185.28 1210.12 1185.28 C 1425.32 1185.29 1599.43 1009.35 1596.45 793.46 z M 1402.21 1079.43 C 1402.1100000000001 1085.4 1389.66 1087.7 1386.32 1082.74 L 1306.8999999999999 964.82 C 1278.4799999999998 981.44 1245.4299999999998 991 1210.12 991 C 1101.4899999999998 991 1013.9199999999998 900.83 1018.1799999999998 791.25 C 1022.0099999999999 692.8 1101.4199999999998 612.23 1199.8199999999997 607.09 C 1307.2399999999998 601.48 1396.6599999999996 684.1700000000001 1401.9699999999998 789.04 L 1402.2199999999998 789.49";
  canvas
    .group()
    .transform({ scale: 0.0328125, translateX: 660, translateY: 944 })
    .path(logoPathData)
    .attr({
      stroke: "rgb(0,0,0)",
      "stroke-width": 0,
      "stroke-dasharray": "none",
      "stroke-linecap": "butt",
      "stroke-dashoffset": 0,
      "stroke-linejoin": "miter",
      "stroke-miterlimit": 4,
      fill: "rgb(102,108,255)",
      "fill-rule": "nonzero",
      opacity: 1,
      "vector-effect": "non-scaling-stroke",
    })
    .transform({ translateX: -1210.12, translateY: -707.64 })
    .move(600, 950);

  // get your svg as string
  console.log(canvas.svg());
  // or
  // console.log(canvas.node.outerHTML);
};
main();
