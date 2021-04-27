import { a, b } from "./a";
import add from "./b";
import "./2.css";
import "./3.less";
import imgSrc from './'

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
    //fetch("https://www.renrendai.com/passport/index/doLogin", { method: "post" });
    fetch("/passport/index/doLogin", { method: "post" }); // 配置proxy之后前面域名不用写
    fetch("/api/passport/index/doLogin", { method: "post" });
    fetch("/api/xxx", { method: "post" });
};

console.log(PRODUCTION);
