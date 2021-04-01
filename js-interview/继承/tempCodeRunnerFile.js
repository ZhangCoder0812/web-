let obj = arr.reduce((prev, next) => {
    if (next in prev) {
        prev[next]++;
    }
    else {
        prev[next] = 1;
    }
    return prev;
}, {})
console.log(obj)
