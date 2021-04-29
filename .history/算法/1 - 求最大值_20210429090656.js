let arr = [1, 2, 3, 4, 5, 6];

// 方式一
arr.sort((a, b) => b - a);
console.log(arr[0]);

// 方式二 Math.max 参数一个个传 不能是一个数组
console.log(Math.max(...arr));

// 方式三
console.log(Math.max.apply(Math, arr));

// 方式四 假设法
let max = arr[0];
arr.slice(1).forEach(item => {
    if (item > max) {
        max = item;
    }
});
console.log(max);

// 方式五 字符串拼接 数字会默认调用 toString 去除中括号
let str = "Math.max(" + arr + ")";
console.log(eval(str));
