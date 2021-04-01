 function fn(){

    let [,...args] = [...arguments]
    console.log(args)
 }

 fn(1,2,3,4)