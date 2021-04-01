

function throtate(fn, wait) {
    let timer
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, wait)
        }
    }
}

function submit() {
    console.log(123)
}

let fn = throtate(submit, 2000)
fn()