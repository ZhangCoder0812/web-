import { a, b } from "./a";
import add from "./b";

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
    // fetch('https://pro.solarmanpv.com/user-s/acc/my/config')
    fetch("/user-s/acc/my/config");  // 配置proxy之后前面域名不用写
    alert("webpack");
};

console.log(PRODUCTION);
// console.log(VERSION);
// console.log(BROWSER_SUPPORTS_HTML5);
// console.log(TWO);
// console.log(typeof window);
// console.log(process.env.NODE_ENV);
