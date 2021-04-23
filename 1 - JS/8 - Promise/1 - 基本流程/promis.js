const STATUS = {
  PANDING: 'PANDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

class Promise {
  constructor(executor) {
    this.status = STATUS.PANDING;
    this.val = undefined;
    this.resaon = undefined;
    const resolve = (val) => {
      // 只有在panding时才可以改变状态
      if (this.status === STATUS.PANDING) {
        this.status = STATUS.FULFILLED;
        this.val = val;
      }
    };
    const reject = (resaon) => {
      if (this.status === STATUS.PANDING) {
        this.status = STATUS.REJECTED;
        this.resaon = resaon;
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
      onfulfilled(this.val);
    }
    if (this.status === STATUS.REJECTED) {
      onrejected(this.resaon);
    }
  }
}

module.exports = Promise;
