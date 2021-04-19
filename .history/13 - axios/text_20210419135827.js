import axios from './2 - 封装axios.js'


axios.get("/data1.json").then(data => {
    console.log(data)
}).catch(err=>{
    console.dir(err)
})