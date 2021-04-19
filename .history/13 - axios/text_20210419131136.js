import axios from './2 - 封装axios.js'


axios.get("/api/cgi-bin/checksum").then(data => {
    consol0e.log(data)
})