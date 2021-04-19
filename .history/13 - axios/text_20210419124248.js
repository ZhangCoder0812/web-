import axios from './2 - 封装axios.js'


axios.get("orejia.natapp1.cc/boa/cgi-bin/checksum").then(data => {
    console.log(data)
})