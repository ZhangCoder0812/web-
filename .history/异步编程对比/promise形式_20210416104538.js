


 

function getData(time) {
    return new Promise(resolve => {
         setTimeout(()=>{
             resolve(time)
         },time)
    })
}

getData('name.txt').then(data => {
    console.log(data)
    return getData('age.txt')
}).then(data => {
    console.log(data)
})