
function A() {
    this.name = 'a'
}

function B() { }
B.prototype = A.prototype
let b = new B()
console.log(b)