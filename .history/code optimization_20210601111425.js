/* 

- ?? (如果左边值为 null 或 undefined，就返回右边的值。默认情况下，它将返回左边的值)
    let x = 0 ?? 1  x => 0 
    let x = '' ?? 1  x => ''
    let x = null ?? 1  x => 1
    let x = undefined ?? 1  x => 1  
  
- 当我们想给多个不同的变量赋值时，这种技巧非常有用
    bad
        x = 1;
        y = 2;
        z = 3;
    good 
        let [x,y,z] = [1, 2, 3];

-  处理大量的算术运算符。这是 JavaScript 变量赋值操作符的有用技巧之一   
    bad
        x = x + 1;
        y = y - 1;
        z = z * 20;
    good
        x++;
        y--;
        z *= 20;
    
- 如果只在变量为 true 时才调用函数，可以使用 && 操作符
    bad
        if (x) {
          fn(); 
        } 
    good    
        x && fn();
  
- for each 循环      
    bad
        for (var i = 0; i < testData.length; i++)
    good 
        for (let i in testData) / for (let i of testData)

- 简短的函数调用
    bad
       if (x == 1) {
          fn1();
       } else {
          fn2();
       }
    good
        let x = 1
        (x === 1? fn1:fn2)();
  
- switch 简化   
    let x = 1
    bad
      switch (x) {
         case 1:
            test1();
            break;
         case 2:
            test2();
            break;
       }
    good  
        var data = {
            1: test1,
            2: test2,
        };
        data[x] && data[x]();

- 指数表示法
    bad
        for (var i = 0; i < 10000; i++) { ... }
    good
        for (var i = 0; i < 1e4; i++) { ... }
    
- 默认参数值
    bad
        function add(test1, test2) {
            if (test1 === undefined)
                test1 = 1;
            if (test2 === undefined)
                test2 = 2;
            return test1 + test2;
        }
    good
        add = (test1 = 1, test2 = 2) => (test1 + test2);


- 将字符串转成数字
    bad 
       let x = parseInt('123'); 
    good 
       let x = +'123'   

- 重复字符串多次
    bad
        let test = ''; 
        for(let i = 0; i < 5; i ++) { 
          test += 'test '; 
        } 
    good
        'test '.repeat(5);
            
- 指数幂简化
    bad
        Math.pow(2,3); // 8
    good
        2**3 // 8

*/

// ----------------- 可选链操作符 ?.  ----------------- 
const obj = {
    a: "foo",
    b: {
        c: "bar",
    },
};
console.log(obj.b?.c); // 输出 bar
console.log(obj.d?.c); // 输出 undefined
console.log(obj.func?.()); // 不报错，输出 undefined
// 以前可能会通过 obj && obj.a && obj.a.b 来获取一个深度嵌套的子属性，
// 现在可以直接 obj?.a?.b 即可
// 除了可以用在获取对象的属性，还可以用在数组的索引 arr?.[index]
// 也可以用在函数的判断 func?.(args) 当尝试调用一个可能不存在的方法时也可以使用可选链。
// 可选链可以使得表达式在函数不存在时返回 undefined 而不是直接抛异常
// const result = someInterface.customFunc?.()