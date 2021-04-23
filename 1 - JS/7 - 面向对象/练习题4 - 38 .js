function fun() {
  this.a = 0;
  this.b = function () {
    console.log(this.a);
  };
}

fun.prototype = {
  b: function () {
    this.a = 20;
    console.log(this.a);
  },
  c: function () {
    this.a = 30;
    console.log(this.a);
  },
};
var my_fun = new fun();
my_fun.b(); // 0 this->my_fun  my_fun.a = 0
my_fun.c(); // 30 this->my_fun
console.log(my_fun.a); // 30 上面my_fun.c()执行将fun中的this.a 变成30
