import axios from './2 - 封装axios.js'


axios.post("/api/boa/cgi-bin/checksum", {
    id: 12,
    name: '2'
}).then(data => {
    console.log(data)
})

$.ajax({
    url: "/api/boa/cgi-bin/checksum",
    // url:"orejia.natapp1.cc/boa/cgi-bin/checksum",
    type: "post",
    data: {
        TxtUserName: "user",
        TxtPassword: "123456"
    },
    dataType: "json",
    contentType: 'application/json',
    success: function (res) {
        console.log(res);
    },
    error: function () {
        console.log("req failed")
    }
})

/// http://127.0.0.1:5500/CheckSum/orejia.natapp1.cc/boa/cgi-bin/checksum
// 