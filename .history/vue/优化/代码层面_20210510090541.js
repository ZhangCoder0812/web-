/* 

 1. data中的数据尽可能扁平化，看具体情况。
        - 数据劫持会遍历 层级越深 遍历越销毁性能
        data(){
            return{
                userInfo:{
                    name:'xxx',
                    age:'12'
                }
            }
        }
        监听了userInfo，name，age

        data(){
            return{
                name:'xxx',
                age:'12'
            }
        }
        这样写只监听了name，age


 2. 使用Object.freeze()冻结不需要修改的数据 静态数据 不需要响应式的数据
        - 避免多余的劫持 省掉部分劫持的性能  
        data(){
            return{
                list:Object.freeze([1,2,3,...])   
            }
        }

   
  3. 合理使用 v-if / v-show
        模版编译的时候(vue-loader)会拿到元素的行内属性，若拿到v-if='true' 会把这个
        元素放入到要渲染的虚拟DOM列表中，若v-if='false' 则就不会放 页面也不会生成/看到DOM节点。
        v-show 无论是true还是false都会入到要渲染的虚拟DOM列表中，只是通过css控制显示与否。
        
        v-if整个解构不加载 v-show结构加载通过css控制显示隐藏。


  4. v-for 循环注意加key 自己可以加时间戳/随机数Math.random()
        最好的key是这条数据的唯一id 就是一个身份证
        主要用于dom diff算法比对效率    


  5. 对于没有使用vue语法的模版 用v-pre指令提升编译效率
       不经常用 纯静态的模版比较少 可用于广告也     
       
     
  6. 长列表优化 虚拟列表 使用插件 vue-virtual-scroll-list    
  

  7. 组件/路由懒加载 + 骨架屏 
       异步加载主要用于优化首屏加载速率， 异步加载可能会出现白屏，使用骨架屏解决
       import skeleton from '.../skeleton.vue' 骨架屏组件自己造/UI组件 
       骨架屏要同步加载不然咋用 骨架屏就是解决异步加载白屏先显示骨架屏
       components:{
           XXX:()=>{
               component:import('.../XXX.vue'),
               loading:skeleton
           }
       }

       异步加载会增加http请求，仁者见仁 智者见智 乱象之中求均衡 😂

  
  8. 图片懒加载 插件 vue-lazyload     


  9. 切换页面时 不需要销毁的组件使用 keep-live 缓存组件 保证组件不销毁
       - 用于表单数据保存


  10. UI组件库按需加载
        - 使用UI组件其中较少的一些组件 需要按需加载 避免全部导入
          若项目中差不多组件全都用到了 就没必要使用按需加载了


*/
