function count(start, end) {
    console.log(start)
    console.log(end)

    let timer

     


    return {
        cancel: function () {
            timer = null
        }
    }


}

count(1, 10)