import axios from './2 - 封装axios.js'


axios.post("/api/cgi-bin/checksum").then(data => {
    console.log(data)
})


/// http://127.0.0.1:5500/CheckSum/orejia.natapp1.cc/boa/cgi-bin/checksum