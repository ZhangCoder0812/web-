

let fs = require('fs')
let it;

function ajax(url) {
    fs.readFile(url, 'utf-8', (err, data) => {
        console.log(data)
        it.next()
    })
}

function* getData() {
    yield ajax('name.txt')
    yield ajax('age.txt')
}

it = getData()

it.next()
