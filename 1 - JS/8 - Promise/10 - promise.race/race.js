function isPromise(val) {
    return val && (typeof val.then === 'function')
}

//race只采用第一个成功或者失败的结果
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        // 谁返回的结果最快 就用谁的
        for (let i = 0; i < promises.length; i++) {
            let current = promises[i];
            if (isPromise(current)) {
                current.then(resolve, reject)
            } else {
                resolve(current);
            }
        }
    })
}
