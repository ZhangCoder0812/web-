setTimeout(() => {
  // s1
  console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
  // s2
  console.log(3);
}, 10);
console.log(4);
console.time("AA");
for (let i = 0; i < 90000000; i++) {
  // do soming
}
console.timeEnd("AA"); // 79ms左右
console.log(5);
setTimeout(() => {
  // s3
  console.log(6);
}, 8);
console.log(7);
setTimeout(() => {
  // s4
  console.log(8);
}, 15);
console.log(9);

/* 
  
    1. 设置一个定时器s1，放入WebApi中，开一个定时器触发线程监听，
       等待20毫秒后放入宏任务队列，不会等待 代码向下继续执行
    2. 同步执行 输出2
    3. 设置一个定时器s2，放入WebApi中，开一个定时器触发线程监听，
       等待10毫秒后放入宏任务队列，不会等待 代码向下继续执行
    4. 同步执行输出4 
    5. 同步执行for循环，耗时79毫秒，此时s1，s2定时器时间到了，s1时间先到的，
       先将s2放入宏任务队列，再将s1放入宏任务队列。但此时并没有执行宏任务，
       因为主线程还并未执行完
    6. 同步执行 输出5
    7. 设置一个定时器s3，放入WebApi中，开一个定时器触发线程监听，
       等待8毫秒后放入宏任务队列，不会等待 代码向下继续执行  
    8. 同步执行 输出7
    9. 设置一个定时器s4，放入WebApi中，开一个定时器触发线程监听，
       等待15毫秒后放入宏任务队列，不会等待 代码向下继续执行   
    10. 同步执行 输出9
    11. 此时主线程空闲下来。去任务队列中拿任务到主线程执行，先看微任务队列，在看宏任务队列，
        「优先级队列」，谁在队列前面谁先执行「谁先到时间把谁放在前面」
        由第5步可知 先输出3 在输出1  
    12. 此时s3，s4也到时间了 放入宏任务队列，s3先到时间放在s4前面
    13. 第11步执行完后，主线程又空闲了 清空任务队列
        先输出6 在输出8       
  
    2
    4
    5
    7
    9
    1
    3
    6
    8
  
    注意：for耗时不一样 此题目的结果也有所不同
  
  */
