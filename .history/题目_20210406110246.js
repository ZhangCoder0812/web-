/* 

p37
    var a = ? ;
    if (a == 1 && a == 2 && a == 3) {
        console.log("ok");
    }

    思路：
        - var a ；全局上下文 加在window上 window.a=xxx
        - == 比较会进行隐私转换
        - a==1 获取a的值 每次比较都获取a的值 可以在获取a的时候改变a的值
    
    答案：    
        方式一：let/const 定义a 这种方式不能用 因为不会加在window上 没法劫持
            var i = 0;
            Object.defineProperty(window, "a", {
                get() {
                    return ++i;
                },
            });

        方式二： === 比较 这种方式不能用 因为 === 比较不会进行隐私转换
            var a = {
            i: 0,
            toString() { // valueOf  Symbol.toPrimitive
                return ++this.i;
              },
            };

        方式三：
            var a = [1, 2, 3];
            a.toString = a.shift;    

*/

 

/* 
  模拟 push 方法 
    Array.prototype.push = function (val) {
        this[this.length] = val;
        // this.length++; 添加之后数组内部会长度会自动+1 我们不需要这样手动去++
                          对于对象的话 通过索引添加元素 我们需要手动去++
        return this.length;
    };
*/

let obj = {
    2: 3, // 1,无操作
    3: 4, // 无操作,2
    length: 2, // 3,4
    push: Array.prototype.push, // 粗暴的方式 直接将某个实例原型的方法赋值给自己
  };
  obj.push(1); // obj[obj.length]=1 => obj[2]=1 obj.length++
  obj.push(2); // obj[obj.length]=2 => obj[3]=2 obj.length++
  console.log(obj); // {2:1,3:2,length:4}
  

*/
