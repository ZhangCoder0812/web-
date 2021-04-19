import axios from './2 - 封装axios.js'


axios['get']("/data.json").then(data => {
    console.log(data)
})