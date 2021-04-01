


var bb = {name:1};
function aa(bb) {
    bb = {name:2};
    console.log(bb)
};
aa(bb);
console.log(bb)