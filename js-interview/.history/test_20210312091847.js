 function myNew(ctx){
     let obj = Object.create(null)
     obj.__proto__ = ctx.prototype
     ctx.call(obj)
     return obj
 
 }