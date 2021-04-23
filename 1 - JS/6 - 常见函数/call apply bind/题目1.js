var name = "wade";

function A(x, y) {
  var res = x + y;
  console.log(res, this.name);
}

function B(x, y) {
  var res = x - y;
  console.log(res, this.name);
}

B.call(A, 40, 30); // 10 'A'
//  => this.name -> A.name -> 函数的name是函数名
B.call.call.call(A, 20, 10); // NaN undefined
/* 
        B.call.call.call -> B.call.call 看成一个整体x 即call方法执行  -> x.call
        相当于让call方法当前普通函数执行，传递 20，10
        最后一个call方法执行的时候，让x执行，this->A ,
        A()执行的时候 ,this->20 ,params->10 , 传递 x->20 y->没传 undefined  
        所以 x + y -> 10+undefined -> NaN
            this.name -> 20.name -> undefined  
   */
Function.prototype.call(A, 60, 50); // 啥都不会输出
/* 
    Function.prototype看成一个整体 是一个匿名空函数 让其执行 this->A 传递 60，50
    匿名空函数执行啥都不会输出。
*/
Function.prototype.call.call.call(A, 80, 70); //  NaN undefined
/* 
    Function.prototype.call.call 看成一个整体 x 
    最后一个call执行的时候 让x执行 this->A 传递 80 70 
*/

/* 
  
   规律：
     - A.call(B,x,y)
          => A执行 this->B 传递给A参数 x,y

     - A.call.call...call(B,x,y)
        最后一个call之前的看成一个整体 x ，x执行 传递x，y
        再次执行 x.call()


*/