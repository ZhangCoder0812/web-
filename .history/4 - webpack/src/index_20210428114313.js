//import './1.css'

import "@/1.css";

//import $ from "jquery";

console.log($);

import moment from 'moment'

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
moment().format('MMMM Do YYYY, h:mm:ss a'); // 四月 28日 2021, 11:38:26 中午
moment().format('dddd');                    // 星期三
moment().format("MMM Do YY");               // 4月 28日 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();  

let a = 1;
console.log(a);

const fn = () => {};

let b = 2;
console.log(b);
