let imageModule = (function() {
    let columns = Array.from(document.querySelectorAll(".column"));
    // 数据绑定
    const bindHTML = function bindHTML(data) {
        // 根据图片的真实宽和设定宽度高调整大小
        data = data.map(item => {
            let w = item.width,
                h = item.height;
            h = h / (w / 230);
            item.width = 230;
            item.height = h;
            return item;
        });

        for (let i = 0; i < data.length; i += 3) {
            // 每次取3个
            let group = data.slice(i, i + 3);
            // 3条数据按从 大->小 排列
            group.sort((a, b) => a.height - b.height);
            // 列的高度按 小->大 排列
            columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            // 图片高度较高的插入列的高度较小的那一列
            group.forEach((item, index) => {
                let { pic, link, title, height } = item;
                let card = document.createElement("div");
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
    };

    // 单张图片

    return {
        // 模块的入口:管控执行的逻辑
        async init() {
            let data = await utils.ajax("./data.json");
            bindHTML(data);
        },
    };
})();
imageModule.init();
