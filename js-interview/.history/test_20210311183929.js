function count(start, end) {
    console.log(start)

    let timer

    for (let i = start + 1; i++; i <= end) {
        timer = setTimeout(() => {
            console.log(i)
        }, 100)
    }


    return {
        cancel: function () {
            timer = null
        }
    }


}

count(1,10)