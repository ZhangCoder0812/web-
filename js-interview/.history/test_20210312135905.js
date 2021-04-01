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

// 纯函数的概念：一个函数的返回结果只依赖其参数，并且执行过程中没有副作用

// - 返回结果只依赖其参数
const a = 1
function add(b) {
    return a + b
}
add(2)

