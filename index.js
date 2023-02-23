const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const { layers, width, height } = require("./input/config.js");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const edition = 1;

const saveLayer = (_canvas, _edition) => {
  fs.writeFileSync(`./output/${edition}.png`, _canvas.toBuffer("image/png"));
};

const drawLayer = async (_layer, edition) => {
  let element =
    _layer.elements[Math.floor(Math.random() * _layer.elements.length)];

  const image = await loadImage(`${_layer.location}/${element.fileName}`);
  ctx.drawImage(
    image,
    _layer.position.x,
    _layer.position.y,
    _layer.size.width,
    _layer.size.height
  );
  console.log(`Layer: ${_layer.name} created with element ${element.name}`);
  saveLayer(canvas, edition);
};

for (let i = 1; i <= edition; i++) {
  layers.forEach((layer) => {
    drawLayer(layer, i);
  });
  console.log("Creating edition: ", i);
}
