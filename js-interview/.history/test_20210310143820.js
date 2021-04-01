function fn(args) {
  console.log(this.name, args);
}
let obj = {
  name: "zhang",
};
fn.apply(obj, [1, 2, 3]);