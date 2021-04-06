
/* 
 1. 正常普通函数执行：
      看前面是否有点，有点前面是谁this就是谁，没有点this是window/global
     「严格模式 undefined」js默认非严格模式 "use strict" 开启严格模式
*/

function fn() {
  console.log(this);
}

let obj = { name: "wade", fn };

fn(); // this -> window
obj.fn(); // this -> obj


//2. 括号表达式(x,y,z) 小括号中包含许多选项 结果返回最后一项，this会受到影响

(10, obj.fn)(); // window / global



//3.  匿名函数

// 1. 函数表达式: this等同与普通函数机制
var fn = function () {
  console.log(this)
}
fn() // window

  // 2. 自执行函数：创建+执行一起完成 this一般为winodw/global
  (function () {
    console.log(this);
  })();

// 3. 箭头函数    
let obj = {
  x: 0,
  fn: () => {
    console.log(this); // window
  },
};
obj.fn();

// 4. 回调函数：this一般为winodw/global ，特俗情况具体分析
let arr = [1, 2, 3];
arr.forEach(function () {
  console.log(this); // window
});

// forEach第二个参数可改变this，但回调函数要是箭头this还是window
arr.forEach(function () {
  console.log(this); // { name: 'wade' }
}, { name: "wade" });

let obj = {
  x: 0,
  fn() {
    console.log(this); // obj

    setTimeout(function () {
      console.log(this); // window
    }, 1000);

    setTimeout(() => {
      console.log(this); // obj 箭头函数没有this 向上找
    }, 1000);
  },
};
obj.fn();



