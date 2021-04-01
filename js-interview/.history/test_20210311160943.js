

function throtate(fn,wait) {
   return function(){
       
   }
}

function submit() {
    console.log(123)
}

let fn = throtate(submit, 2000)
fn()