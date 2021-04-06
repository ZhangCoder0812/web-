/* 

    let obj = {
       name: "wade",
    };

    console.log(obj.hasOwnProperty("name")); // true  私有属性
    console.log(obj.hasOwnProperty("toString")); // false 共有属性
    console.log("name" in obj); // true
    console.log("toString" in obj); // true

  检测对象 私有 和 共有 属性：
     - in 检测是否某个属性 「私有或共有」
          按照原型链向上查找，直到找到Object原型，能找到返回true 找不到返回false
     - 检测私有属性：hasOwnProperty()
     - 检测共有属性：自定义 hasPubProperty(attr) 方法
         @方法一：是它的属性 但不是私有属性 则是共有属性
                有局限性 私有属性和共有属性重名 会返回false
         @方法二：直接在原型链上查找 跳过私有属性查找       

*/
/* 
  @方法一 ：有局限性 私有属性和共有属性重名 会返回false

    let obj = {
    name: "wade",
    // toString() {}, 重名 会返回false
    };

    Object.prototype.hasPubProperty = function (attr) {
    return attr in this && !this.hasOwnProperty(attr);
    };

    console.log(obj.hasPubProperty("name")); //false
    console.log(obj.hasPubProperty("toString")); // true 

*/

let obj = {
  name: "wade",
  // toString() {}, 重名 会返回false
};

Object.prototype.hasPubProperty = function (attr) {
  return attr in this && !this.hasOwnProperty(attr);
};

console.log(obj.hasPubProperty("name")); //false
console.log(obj.hasPubProperty("toString")); // true 



//  @方法二
Object.prototype.hasPubProperty = function (attr) {
  let proto = Object.getPrototypeOf(this); // this.__proto__ 这样写IE不兼容
  while (proto) {
    if (proto.hasOwnProperty(attr)) {
      // 对于原型链上来说是私有的 对于实例来说是共有的
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

// 更简便的写法 
Object.prototype.hasPubProperty = function (attr) {
  let proto = Object.getPrototypeOf(this);
  return attr in proto;
};

let obj = {
  name: "wade",
  toString() { },
};

console.log(obj.hasPubProperty("name")); //false
console.log(obj.hasPubProperty("toString")); // true
