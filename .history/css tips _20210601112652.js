/* 
  相邻兄弟选择器之常用场景

    ul{
        width: 500px;
        margin:auto;
        list-style: none;
        padding:0;
        border:1px solid red;
        text-align: center;
    }
    li+li{
        border-top:1px solid red;
    }

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>

*/

/* 
  outline属性的妙用技巧  区别: outline不计算大小 border计算大小

  * {
     padding: 0;
     margin: 0;
  }
  ul {
     list-style: none;
     width: 600px;
     margin: auto;
  }
  li {
     padding: 10px;
     border: 10px solid pink;
     outline-offset: -10px;
  }
  li+li{
     margin-top:-10px;
  }
  li:hover{
     outline:10px solid gold;
  }

  <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
  </ul>

*/

/* 
  隐藏滚动条或更改滚动条样式
  
  .scroll-container {
   width: 500px;
   height: 150px;
   border: 1px solid #ddd;
   padding: 15px;
   overflow: auto;     /*必须*/
 }
 
 .scroll-container::-webkit-scrollbar {
   width: 8px;
   background: white;
 }
 
 .scroll-container::-webkit-scrollbar-corner,
 滚动条角落
 .scroll-container::-webkit-scrollbar-thumb,
 .scroll-container::-webkit-scrollbar-track {      滚动条的轨道
   border-radius: 4px;
 }
 
 .scroll-container::-webkit-scrollbar-corner,
 .scroll-container::-webkit-scrollbar-track {
   /* 滚动条轨道 */
   background-color: rgba(180, 160, 120, 0.1);
   box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
 }
 
 .scroll-container::-webkit-scrollbar-thumb {
   /* 滚动条手柄 */
   background-color: #00adb5;
 }


*/