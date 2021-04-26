import { a, b } from "./a";
import add from "./b";

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function () {
  alert("webpack");
};

console.log(PRODUCTION)
console.log(VERSION)