/* 

  new执行原理：
     - 把构造函数当作普通函数执行
     - 创建当前类的一个所属类的实例对象 
     - 将方法中的this指向这个实例对象，
     - 若没有返回值或返回原始值类型 就返回实例对象
       若返回对象类型 就返回该对象

  Object.creat(proto) 创建一个对象，并将该对象的原型链指向proto「新对象.__proto__ = proto」
     proto 只能是 null/对象类型 值。如果是null则创建的新对象没有原型链。

  
 new 关键字做了什么？
    - 创建一个新的对象 a
    - a 的原型链指向所属类的原型 a.__proto__ = A.prototype
    - 改变this 返回这个创建的新对象 a

    function A() {
        this.name = 'wade'
        // 1. 不写return 相当于 2 ,返回新对象 a1:{name:'wade'}
        // 2. return this ,返回新对象 a1:{name:'wade'}
        // 3. return 1 原始类型值 ,返回新对象 a1:{name:'wade'}
        // 4. return {age:12} 一个对象 ,返回这个对象 {age:12}
    }

    let a = new A()
    console.log(a)   

*/

  // Ctor 构造函数
  function myNew(Ctor, ...params) {
    // Ctor 若是Symbol 或 BigInt 或 没有原型 或 不是一个函数 就报错
    if (
      Ctor === Symbol ||
      Ctor === BigInt ||
      !Ctor.prototype ||
      typeof Ctor !== "function"
    ) {
      throw TypeError(`${Ctor} is not a constructor`);
    }
    let obj = Object.create(Ctor.prototype); // obj.__proto__ = Ctor.prototype 低版本IE不兼容
    /* 或者   
      let obj = {}
      Object.setPrototypeOf(obj , Ctor.prototype)
    */
    let res = Ctor.call(obj, ...params);
    return res instanceof Object ? res : obj;
  }


  function Dog(name) {
    this.name = name;
  }

  Dog.prototype.bark = function () {
    console.log("wang wang wang");
  };

  Dog.prototype.sayName = function () {
    console.log("my name is " + this.name);
  };

  let d = myNew(Dog, "wade");
  d.bark();
  d.sayName();
  console.log(d.name);
  console.log(d instanceof Dog);

  /* 
    myNew(Symbol);  报错 Symbol类型
    myNew(10);  报错 不是函数
    myNew(10n); 报错 BigInt 类型
    myNew(() => {});  报错 没有原型
  */
