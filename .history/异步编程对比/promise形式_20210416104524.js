


 

function getData(time) {
    return new Promise(resolve => {
         
    })
}

getData('name.txt').then(data => {
    console.log(data)
    return getData('age.txt')
}).then(data => {
    console.log(data)
})