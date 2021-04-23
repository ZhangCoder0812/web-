// 必须使用解构赋值的形式去拿
import { fn1, fn2, name } from "./A";
import { sum, age } from "./B";

fn1();
fn2();
console.log(name);

sum();
console.log(age);
