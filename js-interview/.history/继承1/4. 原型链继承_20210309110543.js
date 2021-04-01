
function A() {
    this.name = 'a'
    this.say = function () {
        console.log(123)
    }
}
console.log(A.prototype)

function B() { }
B.prototype = A.prototype
let b = new B()
console.log(b)