async function async1(){
    console.log('fn1 start')
    await fn2()
    console.log('fn1 end')
}