

/* 

 2
 4
 1
 5


*/

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('3')
//     }, 1000)
// })

// Promise.resolve(p).then(data => {
//     console.log(data)
// })

function Foo() {
    getName = function () {
        console.log(1)
    }
    return this
}

Foo.getName = function () {
    console.log(2)
}

Foo.prototype.getName = function () {
    console.log(3)
}

var getName = function () {
    console.log(4)
}

function getName() {
    console.log(5)
}

Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()







