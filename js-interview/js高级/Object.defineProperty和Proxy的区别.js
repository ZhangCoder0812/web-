/*

  - Object.defineProperty对对象自身做修改,
    而Proxy只是在Object基础上加一层拦截，不修改原对象

  - Object.defineProperty监听手段比较单一，只能监听set,get ,value
    Proxy有10几种监听

  - Object.defineProperty必须得把所有的属性全部添加defineProperty,
    Proxy对整个对象都会进行拦截



*/
 