import { createSVGWindow } from "svgdom";
import { SVG, Rect, registerWindow, Color, Spring } from "@svgdotjs/svg.js";

const COLOR_PLATE = {
  orange: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#FF6B6B", "#FF9898"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#F4665D", "#F45DB8"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#F45D5D", "#FFDE9E"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#FFCACA",
      family: "Inconsolata",
    },
  },

  green: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#06CC61", "#A1FFC1"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#1C8D35", "#EEF086"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#FCFE99", "#76F0A7"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#D3FFDD",
      family: "Inconsolata",
    },
  },

  purple: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#286FFA", "#6083FF"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#4B88FF", "#FF9898"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#5D63F4", "#FF6DC5"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.3,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#DECFFF",
      family: "Inconsolata",
    },
  },

  pink: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#FF69B4", "#FFC0CB"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#FF1493", "#FFB6C1"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#FF69B4", "#FFDEE9"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#FFD1DC",
      family: "Inconsolata",
    },
  },

  brown: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#8B4513", "#D2691E"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#A0522D", "#DEB887"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#CD853F", "#F4A460"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#F5DEB3",
      family: "Inconsolata",
    },
  },

  gold: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#FFD700", "#FFEC8B"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#FFA500", "#FFD700"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#FFFACD", "#FFD700"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#FFF8DC",
      family: "Inconsolata",
    },
  },

  silver: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#C0C0C0", "#D3D3D3"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#B0C4DE", "#C0C0C0"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#DCDCDC", "#C0C0C0"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon: "50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#F5F5F5",
      family: "Inconsolata",
    },
  },

  platinum: {
    background: "#201F1F",
    cover: [
      {
        stop: ["#E5E4E2", "#B0B0B0"],
        from: [0, 0],
        to: [-1, 1],
        opacity: 0.8,
      },
      {
        stop: ["#B0C4DE", "#E5E4E2"],
        from: [0, 1],
        to: [1, 0],
        opacity: 0.9,
      },
      {
        stop: ["#F0F8FF", "#E5E4E2"],
        from: [0, 1],
        to: [1, 1],
        opacity: 0.8,
      },
    ],
    coverDeco: {
      count: 12,
      polygon:
        "50,0 68.31,24.80 97.55,34.55 79.62,59.63 79.39,90.45 50,81.15 20.61,90.45 20.38,59.63 2.45,34.55 31.69,24.80",
      fillColor: "#201F1F",
    },
    typography: {
      fill: "#F8F8FF",
      family: "Inconsolata",
    },
  },
};

const main = async (plate) => {
  const { random } = Math;

  // returns a window with a document and an svg root node
  const window = createSVGWindow();
  const document = window.document;

  // register window and document
  registerWindow(window, document);

  // create canvas
  const canvas = SVG(document.documentElement).size(725, 1040);

  // create a background
  canvas.rect(725, 1040).attr({ fill: plate.background, rx: 32 });

  // create a cover background
  for (let i = 0; i < plate.cover.length; ++i) {
    const gradientPlate = plate.cover[i];
    let coverGradient = canvas
      .gradient("linear", function (add) {
        add.stop(0, gradientPlate.stop[0]);
        add.stop(1, gradientPlate.stop[1]);
      })
      .from(gradientPlate.from[0], gradientPlate.from[1])
      .to(gradientPlate.to[0], gradientPlate.to[1]);
    canvas.rect(600, 630).move(64, 64).attr({
      fill: coverGradient,
      rx: 32,
      opacity: gradientPlate.opacity,
    });
  }

  // Cover deco
  for (let i = 0; i < plate.coverDeco.count; ++i) {
    let fillColor = plate.coverDeco.fillColor;
    canvas
      .polygon(plate.coverDeco.polygon)
      .fill(fillColor)
      .stroke({
        width: 12,
        color: fillColor,
        opacity: 0.4,
      })
      .center(108 + random() * 540, 108 + random() * 540);
  }

  // create Title
  canvas.text(function (add) {
    add
      .tspan("Hello, World!")
      .font({
        size: 36,
        fill: plate.typography.fill,
        family: plate.typography.family,
      })
      .amove(64, 780);
    add
      .tspan("subtitle!")
      .font({
        size: 24,
        fill: plate.typography.fill,
        family: plate.typography.family,
      })
      .amove(64, 840);
  });

  // create a footer
  canvas.text(function (add) {
    add
      .tspan("Footer")
      .font({
        size: 36,
        fill: plate.typography.fill,
        family: plate.typography.family,
      })
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
main(COLOR_PLATE.platinum);
