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
    /* border:10px solid gold; */
    outline:10px solid gold;
  }

*/