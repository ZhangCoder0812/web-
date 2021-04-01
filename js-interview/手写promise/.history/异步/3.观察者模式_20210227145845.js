/*
   
  观察者模式： 观察者 被观察者  有联系
   
   将所有的观察者放到被观察者中（基于发布订阅）

   小宝宝哭了喊爸爸，小宝宝要把爸爸记住 把爸爸收集起来 哭了就通知爸爸（主动的通知）
    小爸爸（被观察者） 爸爸（观察者）

*/

class Subject {
  // 被观察者
  constructor(name) {
    this.name = name;
    this.status = '玩耍';
    this.observers = [];
  }
  attach(o) {
    // 收集所有的观察者
    this.observers.push(o);
  }
  setStatus(newStatus) {
    this.status = newStatus;
    // 通知爸爸我哭了
    this.observers.forEach((o) => o.notify(this));
  }
}

class Observer {
  // 观察者
  constructor(name) {
    this.name = name;
  }
  notify(baby) {
    console.log(`${baby.name}跟${this.name}说${baby.status}`);
  }
}

let baby = new Subject('小宝宝');
let dad = new Observer('爸爸');
let mom = new Observer('妈妈');

baby.attach(dad);
baby.attach(mom);

baby.setStatus('我哭了');

/*
 
vue 依赖收集用的是观察者模式 组建通信用的是发布订阅 $on $emit
redux 用的是发布订阅

观察者包含发布订阅
发布订阅不包含观察者
  
*/