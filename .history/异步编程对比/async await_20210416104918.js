

function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}
async function fn() {
    let name = await getData('name.txt')
    console.log(name)

    let age = await getData('age.txt')
    console.log(age)
}
fn()