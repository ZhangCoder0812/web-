let obj = {
  z: 3,
  x: 1,
  y: 2,
};

// let minKey = Object.entries(obj).find(å
//   (item) => item[1] === Math.min(...Object.values(obj))
// )[0];

// let minKey = Object.entries(obj).sort((a, b) => a[1] - b[1])[0][0];

let minKey = Object.entries(obj).reduce((result, item) => {
  return result[1] > item[1] ? item : result;
})[0];

console.log(minKey);
