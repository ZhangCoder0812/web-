/* 

1. 性能优化的目的？
  - 减少首屏时间
  - 首次可交互时间。验证页面 输入框可点击 用户疯狂点击
  - 首次有意义内容渲染时间。视屏网站看到视屏 

  页面性能检测：https://developers.google.com/speed/pagespeed/insights
    
    - 只请求当前资源

       异步加载 懒加载 polyfill「体积过大使用cdn，pollyfill:https://polyfill.io/v3/url-builder/」
   
    - 缩减资源体积
    
       打包压缩
       gzip
       图片格式的优化 压缩 根据不同分辨率展示不同图片 webp格式图片
       尽量控制cookie大小

    - 时序优化
      
       ssr seo
       prefetch , prerender , preload , preconnect
       <link rel="dns-prefetch" href='xxx.com'> 预先解析dns 代码执行到这一行就会进行dns解析 不加的话只会在碰到请求时才解析
       <link rel="preconnect" href='xxx.com'> 和dns差不多 有比较好的优化效果
       <link rel="preload" href='xxx.com/a.png'> 图片预加载 地址动态的不行

    - 合理利用缓存
   
       cdn  
          cdn预热「处理大流量请求，春晚，没有预热 瞬间超大流量打到源站上会把源站打挂」
          cdn刷新 

    如果一段js执行时间非常长，如何去分析？
      console.time()
    
    阿里云oss支持通过通过链接后面拼参数来做图片的格式转换，尝试写一下把任意图片转为webp，需要注意什么？
        重点：考虑浏览器兼容 边界处理
        function checkWep() {
            // 创建canvas是可以将图片转为base64格式 ，base64格式开头包含图片格式
            try {
                return (
                    document.createComment("canvas")
                    .toDataURL("image/webp")
                    .indexOf("data:image/webp") === 0
                );
            } catch (e) {
                return false;
            }
        }

        const supportWebp = checkWep();

        function getWebpImageUrl(url) {
            if (!url) {
                throw Error("url 不能为空");
            }
            if (url.startsWith) { // 传入base64格式url
                return url;
            }
            if (!supportWebp) {
                return url;
            }
            return url + "?x-oss-processxxxxxx";
        }
   
    页面上有巨量图片，除了懒加载的方式 使用其他方式限制同时加载的数量？
    要求：同时执行的只有limit个 其中一个执行完 立马填补一个 。
         promise.all 是limit个同时执行 是个整体 不符合要求 

  
*/

function measure(target, name, descriptor) {
    const oldValue = descriptor.value;
    descriptor.value = async function() {
        console.time(name);
        const res = await oldValue.apply(this, arguments);
        console.timeEnd(name);
        return res;
    };
    return descriptor;
}

// ------------

const urls = [
    {
        info: "link1",
        time: 3000,
    },
    {
        info: "link2",
        time: 2000,
    },
    {
        info: "link3",
        time: 5000,
    },
    {
        info: "link4",
        time: 1000,
    },
    {
        info: "link5",
        time: 1200,
    },
    {
        info: "link6",
        time: 2000,
    },
    {
        info: "link7",
        time: 800,
    },
    {
        info: "link8",
        time: 3000,
    },
];

function limitLoad(urls, handler, limit) {
    const sequence = [].concat(urls); // 拷贝一下
    let promises = [];
    promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            return index;
        });
    });
    let p = Promise.race(promises);
    for (let i = 0; i < sequence.length; i++) {
        p = p.then(res => {
            promises[res] = handler(sequence[i]).then(() => {
                return res;
            });
            return Promise.race(promises);
        });
    }
}

function loadImg(url) {
    return new Promise(resolve => {
        console.log("---" + url.info + "start");
        setTimeout(() => {
            console.log(url.info + "ok");
            resolve();
        }, url.time);
    });
}

limitLoad(urls, loadImg, 3);
