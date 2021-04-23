/* 

  类似于 发布订阅 和 观察者

*/

let mediator = (function () {
  let pond = [];

  const subscribe = function (fn) {
    if (!pond.includes(fn)) {
      pond.push(fn);
    }
  };

  const publish = function () {
    pond.forEach((item) => {
      if (typeof item === "function") {
        item();
      }
    });
  };

  return {
    subscribe,
    publish,
  };
})();

mediator.subscribe(() => console.log(1));
mediator.subscribe(() => console.log(2));

setTimeout(() => {
  mediator.publish();
}, 1000);
