
// 浏览器下执行 node中会报错 没有window
function Foo() {
  getName = function () {
    // 全局下的getName，没有加this ，就是一段普通代码，若是class中这样写则是私有的getName
    console.log(1);
  };
  return this;
}

Foo.getName = function () {
  // 静态
  console.log(2);
};

Foo.prototype.getName = function () {
  // 共有
  console.log(3);
};

var getName = function () {
  console.log(4);
};

function getName() {
  console.log(5);
}

Foo.getName(); // 2  找的是静态方法 getName
getName(); // 4  全局下的 getName
Foo().getName(); // 1  Foo()执行 内部将全局的getName 变成=>1 , 返回this 即window
getName(); // 1 全局下的 getName
new Foo.getName(); 
new Foo().getName(); 
new new Foo().getName(); 

