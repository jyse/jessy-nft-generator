const fs = require("fs");
const dir = __dirname;
const width = 1000;
const height = 1000;

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i
      };
    });
};

const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: { x: 0, y: 0 },
    size: { width, height }
  },
  {
    id: 2,
    name: "bonsai",
    location: `${dir}/bonsai/`,
    elements: getElements(`${dir}/bonsai/`),
    position: { x: 0, y: 0 },
    size: { width, height }
  },
  {
    id: 3,
    name: "logo",
    location: `${dir}/logo/`,
    elements: getElements(`${dir}/logo/`),
    position: { x: 0, y: 0 },
    size: { width: 400, height: 200 }
  }
];
module.exports = { layers, width, height };
