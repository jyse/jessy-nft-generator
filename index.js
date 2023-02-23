const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const width = 1000;
const height = 1000;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const saveLayer = (_canvas) => {
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("image created");
};

const drawLayer = async () => {
  const image = await loadImage("./Universe.png");
  ctx.drawImage(image, 0, 0, width, height);
  console.log("This ran!");
  saveLayer(canvas);
};

drawLayer();