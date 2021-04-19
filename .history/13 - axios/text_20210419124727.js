import axios from './2 - 封装axios.js'


axios.get("http://192.168.6.215:80/orejia.natapp1.cc/boa/cgi-bin/checksum").then(data => {
    console.log(data)
})