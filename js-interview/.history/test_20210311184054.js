function count(start, end) {
    console.log(start)
    console.log(end)

    let timer

    for (let i = start + 1; i++; i <= end) {
        console.log(i)
    }


    return {
        cancel: function () {
            timer = null
        }
    }


}

count(1, 10)