 function fn(){

    let [,...args] = [...arguments]
    console.log(args)
 }

 fn()