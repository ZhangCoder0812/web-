/* 

1. 内存的生命周期

    内存分配：声明变量，函数，对象的时候 js会自动分配内存
    内存使用：调用的时候，使用的时候
    内存回收：不用的时候

2. js中的垃圾回收机制
  
   引用计数：a对象对b对象有访问权限，那么成为a引用b对象
            缺陷：循环引用 互相引用

   标记清除：在运行的时候给存储在内存中的所有变量加上标记，
            从根部触发，能触及的对象，把标记清除
            哪些有标记的就被视为即将要删除的变量  
            
3. js中有哪些常见的内存泄漏
  
    全局变量
    未被清除的定时器和回调函数
    闭包
    dom的引用：
        const elements = {
            image: document.getElementById("image"),
        };
        document.body.removeChild(document.getElementById("image"));
        虽然image被移除了 但是elements对象中的引用关系还在
        解决：elements.image = null

4. 如何避免内存泄漏
    
    减少不必要的全局变量
    使用完数据后，及时解除引用

5. 实现sizeof函数    

                    
*/

const xxx = {};

const testData = {
    a: 111,
    b: "ccc",
    2222: false,
    c: xxx,
    d: xxx,
};

const seen = new WeakSet();

function sizeOfObject(object) {
    if (object === null) {
        return 0;
    }
    let bytes = 0;
    // 对象里的key也是占用内存空间的
    const properties = Object.keys(object);
    for (let i = 0; i < properties.length; i++) {
        const key = properties[i]
        if(typeof object[key] ==='object' && object[key] !==null){
            if(seen.has(object[key])){
                con
            }
        }
    }
}

function calculator(object) {
    const objectType = typeof object;
    switch (objectType) {
        case "string": {
            return object.length * 2;
        }
        case "boolean": {
            return 4;
        }
        case "number": {
            return 8;
        }
        case "object": {
            if (Array.isArray(object)) {
                // 数组 [1,2,3] [{x:1},{y:2}]
                return object.map(calculator).reduce((res, current) => res + current, 0);
            } else {
                //对象
                return sizeOfObject(object);
            }
        }
        default: {
            return 0;
        }
    }
}
