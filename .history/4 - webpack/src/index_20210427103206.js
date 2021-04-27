import { a, b } from "./a";
import add from "./b";
import "./2.css";
import "./3.less";
import imgSrc from './img.png'

const res = add(a, b);

console.log(res);

let btn = document.getElementById("button");
btn.onclick = function() {
    let img = new Image()
    img.src = imgSrc
    document.body.appendChild
};

console.log(PRODUCTION);
