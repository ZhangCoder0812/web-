import axios from './2 - 封装axios'

console.log(axios)

axios.get("/data.json").then(data => {
    console.log(data)
})