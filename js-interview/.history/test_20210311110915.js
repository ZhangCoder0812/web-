async function async1() {
    console.log('async1 start')
    await fn2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}