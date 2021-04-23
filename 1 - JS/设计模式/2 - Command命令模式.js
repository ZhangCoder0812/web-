
/* 

  Command命令模式：管控方法执行顺序，暴露一个包装后的方法，将所有方法暴露出去在外面
                  管控顺序不太合适

*/

let utils = (function () {
  function getData1() {}
  function getData2() {}
  function getData3() {}
  function init() {
    getData1();
    getData2();
    getData3();
  }
  return {
    init,
  };
})();
