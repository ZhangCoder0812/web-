/*

 什么是面向对象(oop)：
     - 面向对象时一种编程思想，js本身就是基于面向对象构建出来的，
       js中有很多内置类 Array，Object，Function ，Promise 等。
       基于 new 类名() ,创建实例来管理异步编程。像 vue/react/jquery
       等都是基于面向对象构建出来的，他们都是类，他们都是类 开发的时候都是
       创建他们的实例来操作的。。。
     - js 中的面向对象和其他编程语言有些不同， js中的类和实例是基于原型和
       原型链机制来实现的

 面向过程：分析出解决问题的所有步骤，针对每个步骤一一实现，按照顺序执行

 面向对象；把构成问题的所有事物 拆解成一个个对象 这一个个对象是为了描述
          这个对象在当前问题的各种行为

 面向对象特性：
    - 封装：让使用的人不用去关系内部实现 对外暴露一些方法 给使用者调用
    - 继承：为了代码的复用 从父类上继承它的属性和方法
    - 多态：不同对象执行同一个操作 产生不同结果

 什么场景下使用面向对象编程：
   - 面向过程：简单场景下 协同人员较少
   - 面向过程：中大型项目 协同人员较多 迭代频繁 代码健壮性

js中创建对象：

    - 工程模式
        function createPlayer(name) {
            const Player = new Object();
            Player.name = name;
            Player.prototype = function () {
                console.log(this.name);
            };
            return Player;
        }

        let p1 = createPlayer('wade');
        let p2 = createPlayer('lbj');
        console.log(p1.constructor);   // [Function: Object] 判断不出准确类型

    - 构造函数/实例
        function Player() {
            this.name = 'wade';
            this.say = function () {
                console.log(this.name);
            };
        }
        let p1 = new Player();
        let p2 = new Player();
        console.log(p1.constructor) // [Function: Player]  准确的判断出Player类型
        console.log(p1.say === p2.say); // false 每次创建实例 实例上的方法都会开辟内存

    - 原型
        function Player() {
            this.name = 'wade';
            }
            Player.prototype = function () {
            console.log(this.name);
        };
        let p1 = new Player();
        let p2 = new Player();
        console.log(p1.constructor) // [Function: Player]
        console.log(p1.say === p2.say); // true 实例上的方法使用同一块内存

*/

/* 

c
b
c
b
c
d
b
a
c
d


transition
5000
1000,2,3,4,5




*/