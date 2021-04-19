import axios from './2 - 封装axios.js'


axios.post("/api/cgi-bin/checksum").then(data => {
    console.log(data)
})