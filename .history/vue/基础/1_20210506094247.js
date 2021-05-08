/* 

  凡是 v-xxx 的行内属性 统称为指令，指令后边若跟了某些值 那么这些值必须是vue变量(data中的变量)
  
  v-model 用于表单元素/组件 value+input事件的语法糖

  v-html 相当于 innerHTML 只能用于可信任的内容上 不要用于用户提交的内容上

  v-text 相当于 innerText

  v-cloak 后不跟任何内容 解决网络不好双大括号的显示问题。
          [v-cloak]{
              
          } 
          原理：vue渲染完成前 v-cloak会当做一个元素的行内属性，渲染完毕后清除此属性

  v-pre 后不跟任何内容 优化性指令 告诉vue哪个标签不用vue渲染 不解析 {{xxx}} @xxx ...等        

  v-bind 简写 : 绑定内容
        :class="{box1:1>2,box2:2>2,box3:true}" => 最终会加上 .box2 .box3

  v-on 简写 @ 绑定事件 
       <div @click="add"></div>  不写小括号args为事件对象
       <div @click="add(1)"></div>  写小括号传递参数 args为1
       <div @click="add(1,$event)"></div>  传递参数 和 事件对象
       method:{
           add(args){
             console.log(args)
           }
       }    

  修饰符：
    指令修饰符：.lazy .number .trim 
    事件修饰符：.stop .prevent .capture .self .once .passive      
    按键修饰符：.enter .tab .delete .esc .space .up .down .left .right


*/
