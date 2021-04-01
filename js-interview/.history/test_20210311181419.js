
function(){ 
    var r = bindThis(function (a, b) { 
        return this.test + a + b
     },
         { test: 2 })(2, 3); 
         return r === 7;
         }