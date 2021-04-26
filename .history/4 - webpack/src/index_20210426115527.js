import { a, b } from "./a";
import add from "./b";

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
    fetch("https://m.dianping.com/myshow/ajax/performances/2;st=1;p=1;s=8;tft=0?cityId=10&sellChannel=7");
    //fetch("/api/batch?v=1&sdk=1.7.11"); // 配置proxy之后前面域名不用写
    alert("webpack");
};

console.log(PRODUCTION);
// console.log(VERSION);
// console.log(BROWSER_SUPPORTS_HTML5);
// console.log(TWO);
// console.log(typeof window);
// console.log(process.env.NODE_ENV);
