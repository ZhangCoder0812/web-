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
new Foo.getName(); // 2 成员访问优先级高 先拿到getName=>2的函数，()最后在new执行。 new 'func=>2'() new这个函数执行会把它当作普通函数执行 => 2
new Foo().getName(); // 3 优先级相同 从左到右运算 new Foo()返回的实例没有getName 向原型上查找 原型上的getName => 3
new new Foo().getName(); // 3 同上 => new 实例f.getName() =>f没加() 无参数列表new =>new 'func=>3'()  => 3

// 运算符优先级  无参数列表new 19 ，有参数列表new 20 ，成员访问 20
// new Foo  无参数列表new
// new Foo() 有参数列表new
// new Foo(10) 有参数列表new
