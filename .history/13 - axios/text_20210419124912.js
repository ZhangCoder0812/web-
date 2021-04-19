import axios from './2 - 封装axios.js'


axios.get("/cgi-bin/checksum").then(data => {
    console.log(data)
})