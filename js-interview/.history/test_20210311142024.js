

const p  = function(){
    return new Promise((resolve)=>{
        const p1 = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(1)
            },0)
            resolve(2)
        })
        p1.then(res=>{
            console.log(res)
        })
        console.log(2)
        resolve(4)
    })
}

p().then()