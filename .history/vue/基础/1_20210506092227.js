/* 

  - 凡是 v-xxx 的行内属性 统称为指令，指令后边若跟了某些值 那么这些值必须是vue变量(data中的变量)
  
  v-model 用于表单元素/组件 value+input事件的语法糖

  v-html 相当于 innerHTML 只能用于可信任的内容上 不要用于用户提交的内容上

  v-text 相当于 innerText

  v-cloak 后不跟任何内容 解决网络不好双大括号的显示问题。
          原理：vue渲染完成前 v-cloak会当做一个元素的行内属性，渲染完毕后清除此属性

  v-pre 后不跟任何内容 优化性指令 告诉vue哪个标签不用vue渲染 不解析 {{xxx}} @xxx ...等        

  v-bind 简写 : 绑定


*/