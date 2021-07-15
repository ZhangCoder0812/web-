/*

  发布订阅模式： Publish & Subscribe 
      灵感来源于：DOM二级事件绑定 addEventListener
      + 给当前元素绑定一个事件行为，绑定多个不同的方法「事件池机制」
      + 事件行为触发 会依次通知事件池中的方法执行
      + 自定义事件处理的一种方案

  类似于中介arr，卖房者把房源信息放到中介on，买房者
  去中介看房子emit 。卖房者和买房者没有联系 通过中介。     

  发布订阅： on订阅 emit发布
      arr缓存订阅的事件，发布时取出来一个个执行
      没有 发布者 订阅者 的概念
      
*/

function getData(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time * 1000)
  })
}

let res = []

let eventBus = {
  pond: [],
  // 订阅
  on(fn) {
    this.pond.push(fn)
  },
  // 发布
  emit() {
    this.pond.forEach(fn => fn())
  }
}

// 被动 读取完成强制触发 我们才收到消息
eventBus.on(() => {
  console.log('xxxxxxxx')
  if (res.length === 2) {
    console.log('数据请求完成', res)
  }
})

getData(2).then(() => {
  res[0] = 2
  eventBus.emit()
})
getData(6).then(() => {
  res[1] = 2
  eventBus.emit()
})