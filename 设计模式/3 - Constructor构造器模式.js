
/* 

  Constructor构造器模式：通过new生成实例
     + 可以自定义类和实例
     + 实例拥有私有/公有的属性和方法
     + 用于公共类库封装，插件组件开发
     + 每生成一个实例，既保证了每个实例之间有自己的私有属性和方法，互不影响，有保证了
       公共属性和方法的调用，减少代码冗余

*/

class Fn{
    constructor(xxx){
        this.xxx = xxx
    }
    getData(){}
    
}
let f1 = new Fn()
let f2 =  new Fn()