import axios from './2 - 封装axios.js'

console.log(1111)
console.log(axios)

axios.get("/data.json").then(data => {
    console.log(data)
})