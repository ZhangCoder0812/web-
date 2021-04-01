

const p  = function(){
    return new Promise((resolve)=>{
        const p1 = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(1)
            },0)
            resolve(2)
        })
    })
}