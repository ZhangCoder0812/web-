let imageModule = (function() {
    let columns = Array.from(document.querySelectorAll(".column")),
        lazyImageBoxs;
    // 数据绑定
    const bindHTML = function bindHTML(data) {
        data = data.map(item => {
            let w = item.width,
                h = item.height;
            h = h / (w / 230);
            item.width = 230;
            item.height = h;
            return item;
        });
        for (let i = 0; i < data.length; i += 3) {
            let group = data.slice(i, i + 3);
            group.sort((a, b) => a.height - b.height);
            columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            group.forEach((item, index) => {
                let {
                    pic,
                    link,
                    title,
                    height
                } = item;
                let card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${link}">
					<div class="lazyImageBox" style="height:${height}px">
						<img src="" alt="" data-img="${pic}">
					</div>
					<p>${title}</p>
				</a>`;
                columns[index].appendChild(card);
            });
        }
        lazyImageBoxs = Array.from(document.querySelectorAll('.lazyImageBox'));
    };


    // 单张图片加载 传入图片外层的盒子
    const singleImgLoading = function(imgBox) {
        let img = imgBox.querySelector("img"),
            trueImg = img.getAttribute("data-img"),
            tempImg = new Image(); // 临时创建img 保证图片能加载成功才赋值
        tempImg.src = trueImg;
        console.log(trueImg);
        tempImg.onload = function() {
            img.src = trueImg;
            img.style.opacity = 1;
        };
        tempImg = null; // 用完释放
    };

    //根据图片在视口中的位置 控制哪些图片懒加载
    // A 盒子底边距body的上偏移
    // B 浏览器底边距body的上偏移：
    const lazyImgsFunc = function() {
        lazyImageBoxs.forEach(imgBox => {
            let A = imgBox.offsetHeight + utils.offset(imgBox).top,
                B = document.documentElement.clientHeight + document.documentElement.scrollTop;
            if (A <= B) {
                singleImgLoading(imgBox);
            }
        });
    };

    return {
        // 模块的入口:管控执行的逻辑
        async init() {
            let data = await utils.ajax("./data.json");
            bindHTML(data);
            window.onload = lazyImgsFunc;
            window.addEventListener("scroll", lazyImgsFunc);
        },
    };
})();
imageModule.init();
