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
    // 由于Promise的then可以链式调用 所以then方法返回的也因该是一个Promise实例

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === STATUS.FULFILLED) {
        try {
          let x = onfulfilled(this.value);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === STATUS.REJECTED) {
        try {
          let x = onrejected(this.resaon);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === STATUS.PANDING) {
        // 订阅 这里保存成一个函数 可以做其他的事 切片编程（装饰器模式）
        this.onResolveCallbacks.push(() => {
          // todo other 。。。
          try {
            let x = onfulfilled(this.value);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectCallbacks.push(() => {
          try {
            let x = onrejected(this.resaon);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

    return promise2;
  }
}

module.exports = Promise;
