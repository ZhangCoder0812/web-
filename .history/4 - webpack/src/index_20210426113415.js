import { a, b } from "./a";
import add from "./b";

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
    fetch('https://api.sermatec-cloud.com/energy/getAllDtu')
    alert("webpack");
};

console.log(PRODUCTION);
// console.log(VERSION);
// console.log(BROWSER_SUPPORTS_HTML5);
// console.log(TWO);
// console.log(typeof window);
// console.log(process.env.NODE_ENV);
 
