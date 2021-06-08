Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4);
    })
    .then(res => {
        console.log(res);
    });

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });
let arr = [
    {name:'wade',age:10},
    {name:'lbj',age:20},
]
console.table(arr)