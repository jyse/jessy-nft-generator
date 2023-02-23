const dir = __dirname;
const width = 1000;
const height = 1000;

const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    position: { x: 0, y: 0 },
    size: { width, height }
  },
  {
    id: 2,
    name: "bonsai",
    location: `${dir}/bonsai/`,
    position: { x: 0, y: 0 },
    size: { width, height }
  },
  {
    id: 3,
    name: "logo",
    location: `${dir}/logo/`,
    position: { x: 0, y: 0 },
    size: { width, height }
  }
];
