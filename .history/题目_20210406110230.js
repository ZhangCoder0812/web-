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
