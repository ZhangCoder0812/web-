/*
 取then的时候可能报错
  Object.defineProperties('x','then',{
    get(){
      throw new Error()
    }
  })
*/
const STATUS = {
  PANDING: 'PANDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};
// 按照 PromiseA+ 规范来写
// 判断上一个then成功时返回的是不是Promise 是的话让成功或失败 不是的话就成功
// x为上一个then成功时返回的结果
function resolvePromise(x, promise2, resolve, reject) {
  // 1. 看x是普通值还是Promise 是Promise 就使用他的状态
  if (x == promise2) {
    // x不能和上一个Promise实例相等 循环引用了
    return reject(new TypeError('出错了'));
  }
  // 2. 看x是不是对象或函数 这里判断不用 instranceOf 是为了兼容别人的Promise 不能保证别人的Promise实例(x)
  // 和自己写的Promise实例是同一个实例
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    // 是对象或函数 只要有then方法就认为是Promise ，PromiseA+规范说明的
    let called; // 用于判断Promise是否执行过了 执行过了就return
    try {
      // 取then时可能出错
      let then = x.then; // 拿出来防止每次取then时候出错 直接复用上次的
      if (typeof then == 'function') {
        // then属性是函数 认为x是一个Promise 就调用返回的Promise 作为下一个then的结果
        then.call(
          x,
          (y) => {
            // 上一个then返回的Promise 成功的回调
            if (called) return;
            called = true;
            // reslove 执行结果可能又是一个Promise 递归调用 直到返回一个普通值
            resolvePromise(y, promise2, resolve, reject);
          },
          (r) => {
            // 上一个then返回的Promise 失败的回调
            if (called) return;
            called = true;
            reject(r);
          },
        );
      } else {
        // then属性不是函数 认为x不是Promise 直接resolve
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 不是函数或对象就肯定不是 Promise 直接resolve
    resolve(x);
  }
  // 3. 不是Promise就直接 resolve
}

class Promise {
  constructor(executor) {
    this.status = STATUS.PANDING;
    this.value = undefined;
    this.resaon = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
    const resolve = (val) => {
      // 这个值可能是一个 Promise ，那就递归解析 直到是一个普通值
      if (val instanceof Promise) {
        return val.then(resolve, reject)
      }
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
    // then 的参数可能没有传 ，没传的话 成功就默认传入成功的函数 将结果丢给下一个then的成功回调
    // 失败就抛错 将结果丢给下一个then 的错误回调
    onfulfilled =
      typeof onfulfilled === 'function' ? onfulfilled : (data) => data;
    onrejected =
      typeof onrejected === 'function'
        ? onrejected
        : (err) => {
          throw err; // // 这里必须要加{} 抛出错不能被return 出来
        };

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === STATUS.FULFILLED) {
        // 这里用 setTimeout包装一下是让第二个then的处理变成异步
        // 就可以拿到 promise2 ，不然拿不到 因为 new Promise 是同步的
        setTimeout(() => {
          try {
            let x = onfulfilled(this.value);
            resolvePromise(x, promise2, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let x = onrejected(this.resaon);
            resolvePromise(x, promise2, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === STATUS.PANDING) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onfulfilled(this.value);
              resolvePromise(x, promise2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onrejected(this.resaon);
              resolvePromise(x, promise2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
  catch(err) { // catch 方法相当then 没有成功参数 只有失败 只是一个then的简写
    return this.then(null, err)
  }
  static resolve(val) {
    return new Promise((resolve, reject) => {
      resolve(val)
    })
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
}

// 测试自己写promise是否符合 PromiseA+ 规范
// npm install promises-aplus-tests -g
// 进入此文件路径下   promises-aplus-tests  文件名
// 872 passing 表示符合规范 全部通过

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Promise;
