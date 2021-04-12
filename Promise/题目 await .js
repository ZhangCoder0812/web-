/* ----------------- await ------------ 
 
 await 10 => Promsie.resolve(10)

 await 后面跟着的应是一个promise，如果不是也会被变成promise，
 await 会中断函数执行，其下面的代码只有在当前await后面的promise成功时才会执行
       如果是失败的就下面的代码就不执行了。
 await 是异步微任务        

*/

function api(timer) {
    console.log("=====", timer / 1000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(timer);
        console.log("-----", timer / 1000); // 先于reslove输出是因为在宏任务中 当前宏任务执行完才清空微任务队列
      }, timer);
    });
  }
  
  /*  
   1 .相继执行
  
      async function fn1() {
          let res1 = await api(2000);
          console.log( res1);
          let res2 = await api(1000);
          console.log(  res2);
      }
      fn1();
  
      ==== 2
      ---- 2
      2000
      ==== 1
      ---- 1
      1000
  
  */
  
  /* 
  
  2. 同时发生
  
      async function fn1() {
          let slow = api(2000);
          let fast = api(1000);
          console.log( await slow);
          console.log( await fast);
      }
      fn1();
      
      1. 先输出 ==== ，没有任何问题，
      2. 这样写就同时向任务队列里加里两个宏任务：
           宏任务 slow 2s后执行
           宏任务 fast 1s后执行
      3. await slow 会将 await fast 放在微任务队列，
         等待 await slow 成功时才执行
      4. 1s 过后 宏任务 fast 定时器时间到了，
         输出 ----- 1 ，将await fast状态改为成功，然后去清空微任务队列 由于步骤3的原因，这个微任务
         并不能被执行。「清空微任务队列指的是执行可被执行的微任务，并不是谁先加进了就执行谁」   
      4. 再过1s，2s时间到了， 宏任务 slow 定时器的时间到了，
         输出  ----- 2 ，await slow 的状态变为成功 
         输出 2000，
      5. 清空微任务队列，这时 await slow 的状态已经是成功态，步骤3产生的
         微任务可被执行，不用再等待1s 直接输出
         输出 1000 
  
      ===== 2
      ===== 1
      ----- 1
      ----- 2
      2000
      1000
  
  */
  
  /* 3. 同时发生 类似于第2种
    
      async function fn1() {
          return Promise.all([api(2000), api(1000)]).then((res) => {
              console.log(res[0]);
              console.log(res[1]);
          });
      }
      fn1();
  
      ===== 2
      ===== 1
      ----- 1
      ----- 2
      2000
      1000
  
  */
  
  /* 4. 平行执行
  
      async function fn1() {
          await Promise.all([
              (async () => console.log(await api(2000)))(),
              (async () => console.log(await api(1000)))(),
          ]);
      }
      fn1();
  
      1. 先输出 ==== ，没有任何问题，
      2.  all中的
            第一个函数执行：
              添加 宏任务slow， 2s后执行
              添加 微任务slow ，宏任务slow的状态成功后执行
            第二个函数执行：
              添加 宏任务fast， 1s后执行
              添加 微任务fast ，宏任务fast的状态成功后执行
      3. 1s 过后 宏任务fast 定时器时间到了，
         输出 ----- 1 ，将await fast状态改为成功，然后去清空微任务队列中的 微任务fast ，
         输出 1000     
      4. 再过1s，2s时间到了， 宏任务 slow 定时器的时间到了，
         输出 ----- 2 ，await slow 的状态变为成功 
         输出 2000，
  
      ===== 2
      ===== 1
      ----- 1
      1000
      ----- 2
      2000
  
  */
  
  /* 5. 平行执行 类似4
  
    function fn1() {
          api(2000).then((res) => console.log(res));
          api(1000).then((res) => console.log(res));
    } 
    fn1();
  
    ===== 2
    ===== 1
    ----- 1
    1000
    ----- 2
    2000
  
  */
  
  /* 
  
   总结：
     相继执行：等待上一个执行完 再执行下一个
             先2s 再1s 总共耗时3s ，输出顺序 自上而下
     同时发生：只是把请求同时发生 输出结果顺序还是自己通过await管理
             2s 1s 同时执行 总耗时2s ，输出顺序 2s的先输出 1s的后输出 根据上面await书写的顺序
     平行执行：谁先到先执行谁 结果就先先输出
             2s 1s 同时执行 总耗时2s ，输出顺序 1s的先输出 2s的后输出
             
  */
  