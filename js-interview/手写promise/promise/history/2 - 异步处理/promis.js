const STATUS = {
  PANDING: 'PANDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

class Promise {
  constructor(executor) {
    this.status = STATUS.PANDING;
    this.value = undefined;
    this.resaon = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
    const resolve = (val) => {
      // 只有在panding时才可以改变状态
      if (this.status === STATUS.PANDING) {
        this.status = STATUS.FULFILLED;
        this.value = val;
        // 发布
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (resaon) => {
      if (this.status === STATUS.PANDING) {
        this.status = STATUS.REJECTED;
        this.resaon = resaon;
        // 发布
        this.onRejectCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      // 出现异常也是执行 reject
      reject(e);
    }
  }
  then(onfulfilled, onrejected) {
    if (this.status === STATUS.FULFILLED) {
      onfulfilled(this.value);
    }
    if (this.status === STATUS.REJECTED) {
      onrejected(this.resaon);
    }
    // 遇到异步 的时候没有立即即没有调成功 也没有调失败 执行到then就不知道什么状态
    // 那么就将onfulfilled, onrejected 存起来 什么时候异步结束了 调resolve 或 reject
    // 时候肯定会改变状态 再让保存起来的函数根据此时的状态一一执行
    // 这就是发布订阅模式
    if (this.status === STATUS.PANDING) {
      // 订阅 这里保存成一个函数 可以做其他的事 切片编程（装饰器模式）
      this.onResolveCallbacks.push(() => {
        // todo other 。。。
        onfulfilled(this.value);
      });
      this.onRejectCallbacks.push(() => {
        onrejected(this.resaon);
      });
    }
  }
}

module.exports = Promise;
