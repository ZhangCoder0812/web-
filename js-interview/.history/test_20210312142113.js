/* 

 SDK
   - SDK 就是 Software Development Kit 的缩写，中文
     意思就是【软件开发工具包】。可以这么说：辅助开发某一类
     软件的相关文档、范例和工具的集合都可以叫做【SDK】
     比如——
  
     有公司开发出某种软件的某一功能，把它封装成SDK（比如数据分析SDK
     就是能够实现数据分析功能的SDK），出售给其他公司做开发用，
     其他公司如果想要给软件开发出某种功能，但又不想从头开始搞开发，
     直接付钱省事。

 API和SDK的区别  
   - 总的来说，两者没有值得比较的区别，因为是具有关联性的两种东西 
     你可以把SDK想象成一个虚拟的程序包，在这个程序包中有一份做好的
     软件功能，这份程序包几乎是全封闭的，只有一个小小接口可以联通外
     界，这个接口就是API 
     有一杯密封饮料，它的名字叫做“SDK”。
     饮料上插着吸管，吸管的名字叫“API”。

*/

/* 

纯函数的概念：一个函数的返回结果只依赖其参数，并且执行过程
             中没有副作用

函数副作用：函数执行的过程中对外部产生了变化，我们就说函数产生了副作用
           例如修改外部的变量、调用DOM API修改页面，发送Ajax请求、
           调用window.reload刷新浏览器甚至是console.log打印数据

好处：  纯函数非常“靠谱”，执行一个纯函数你不用担心它会干什么坏事，
        它不会产生不可预料的行为，也不会对外部产生影响。不管何时何地，
        你给它什么它就会乖乖地吐出什么。如果你的应用程序大多数函数都是
        由纯函数组成，那么你的程序测试、调试起来会非常方便。           

*/

// // - 返回结果只依赖其参数
const a = 1
function add(b) { // 非纯函数 add的返回值与a相关 无法预料
    return a + b  // a=1 => add(2) =>3 , a=2 => add(2) =>4
}                 // a(2)的值不确定
add(2)

function add(x, y) { // 纯函数 add的返回值依赖只依赖它的参数x,y 
    return x + y     // add(1, 2) 永远是3
}
add(1, 2)

// - 函数执行过程中没有副作用
function add(obj) {
    obj.age += 10
    return obj.age
}
const wade = { age: 10 }
console.log(add(wade)) // 20 非纯函数 修改了外部变量，产生了副作用

// 但是你在函数内部构建的变量，然后进行数据的修改不是副作用
function add(obj) {
    obj.age += 10
    return obj.age
}
const wade = { age: 10 }
console.log(add(wade)) 