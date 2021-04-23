
function C1(name) {
  if (name) {
    // 实例化的时候没有传参数 name属性不会被加在实例的私有属性上 访问name会找原型链上的name
    this.name = name;
  }
}

function C2(name) {
  this.name = name;
  /* 
      实例化的时候没有传参数 但是name属性已经被加在实例私有属性上 
      值为undefined 访问name不会找原型上的name
  */
}

function C3(name) {
  this.name = name || "join";
  /* 
      实例化的时候没有传参数 但是name属性已经被加在实例私有属性上 
      不传的话使用 join 
  */
}

C1.prototype.name = "Tom";
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";

let name = new C1().name + new C2().name + new C3().name;

console.log(name); // Tomundefinedjoin
