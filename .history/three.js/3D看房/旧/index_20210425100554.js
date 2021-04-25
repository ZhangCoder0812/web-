/* 

  3D看房：把你放在正方体里面，正方体每个面都贴上了图片，必须严丝合缝，
         对图片要求较高，自己不好造图片，从网上扒。就达到了3D的效果。

*/

let scene, camera, renderer, mesh;
let w = window.innerWidth,
    h = window.innerHeight;
let lon = 90, // 鼠标在屏幕上的横偏移量 作为旋转角度的基础 (鼠标滑动的快 不能转的角度太大 根据偏移量缩小)
    lat = 0, //  鼠标在屏幕上的纵偏移量 作为旋转角度的基础
    phi = 0, // 相机的横屏面 到y轴 的 偏移弧度
    theta = 0, // 相机的竖切面 到x轴 的 偏移弧度
    target = new THREE.Vector3(); // 用来表示相机的目标向量(相机看向的方向)
// onPointerDownPointerX, // 记录鼠标按下的时候横轴位置
// onPointerDownPointerY, // 记录鼠标按下的时候纵轴位置
// onPointerDownLon, // 记录移动时的鼠标横轴位置
// onPointerDownLat; // 记录移动时的鼠标横轴位置

// 初始化 创建环境
function init() {
    let app = document.getElementById("app");
    scene = new THREE.Scene(); // 创建场景
    camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000); // 创建相机
    renderer = new THREE.WebGLRenderer(); // 创造一个渲染器
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比 提高清晰度
    app.appendChild(renderer.domElement);
    createMesh();
}

// 创建物体
function createMesh() {
    let geometry = new THREE.BoxGeometry(300, 300, 300);
    // 要使用 MultiMaterial 因为每一个面要贴不同图片 参数是一个数组
    // 数组里要是每一个图片做成的材料 不能是直接放个图片, 顺序：前后 上下 左右
    let baseUrl = "../images/";
    let ary = [
        loadTexture(baseUrl + "f.jpg"),
        loadTexture(baseUrl + "b.jpg"),
        loadTexture(baseUrl + "u.jpg"),
        loadTexture(baseUrl + "d.jpg"),
        loadTexture(baseUrl + "l.jpg"),
        loadTexture(baseUrl + "r.jpg"),
    ];
    let material = new THREE.MultiMaterial(ary);
    let cube = new THREE.Mesh(geometry, material);
    cube.scale.x = -1; // 让立方体里外翻一下 因为站在里面看 不然看不到效果 都是黑的
    scene.add(cube);
}

// 负责把图片做层相应材料
function loadTexture(url) {
    //创造一个纹理  理解成贴画就可以了
    let textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load(url); // 由图片组成的纹理
    texture.needsUpdate = true; //load 异步加载 将其设置为true，加载之后跟新一下，纹理一更新就使用新的纹理
    let basicMaterial = new THREE.MeshBasicMaterial({
        map: texture, // 设置颜色贴图属性值
    });
    return basicMaterial;
}

init();

function update() {
    lon += 0.1;
    lat = Math.max(-85, Math.min(85, lat)); // 上下转动范围 -85 ~ 85
    phi = THREE.Math.degToDad(90 - lat); // 弧度转角度
    theta = THREE.Math.degToDad(lon);
    target.x = 500 * Math.sin(phi) * Math.cos(theta);
    renderer.render(scene, camera);
}

//检测效果函数
function test() {
    camera.position.set(500, 300, 100); //设置相机位置
    camera.lookAt(scene.position); // 相机照向哪个方向
    renderer.render(scene, camera);
}
