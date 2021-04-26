import { a, b } from "./a";
import add from "./b";

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
 
   // fetch("https://catfront.dianping.com/api/batch?v=1&sdk=1.7.11"); 
    fetch("https://catfront.dianping.com/api/batch?v=1&sdk=1.7.11");  // 配置proxy之后前面域名不用写
    alert("webpack");
};

console.log(PRODUCTION);
// console.log(VERSION);
// console.log(BROWSER_SUPPORTS_HTML5);
// console.log(TWO);
// console.log(typeof window);
// console.log(process.env.NODE_ENV);
