/* 

  无限极折叠菜单中 数据一般不是固定的，需要从服务器获取
    - 如果数据量不大 一般是一次请求数据 获取所有级别的信息 ，一次性创建所有的DOM节点
    - 如果数据量比较大 一般是只请求回来当前这一级信息 当点击展示的时候 再去
      请求下一信息，再渲染当前点击的DOM节点

*/

function queryData() {
    return new Promise(resolve => {
        $.ajax({
            url: "./data.json",
            method: "get",
            dataType: "json",
            success: result => {
                resolve(result);
            },
        });
    });
}

$(async function() {
    let $level = $(".level");
    let result = await queryData();
    console.log(result);
    function bindHTML(result) {
        let str = ``;
        result.forEach((item, index) => {
            let { name, open, children } = item;
            str += `
                <li>
                    <a href="#" class="title">${name}</a>
                    ${
                        children && children.length > 0
                            ? `
                            <em class="icon open"></em>
                            <ul class="level level1" style="display: block;">
                                
                            </ul>
                            `
                            : ""
                    }
                    
                </li>
            `;
        });
        return str;
    }
    bindHTML(result);
});
