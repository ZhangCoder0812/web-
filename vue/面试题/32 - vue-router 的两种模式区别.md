

# vue-router 的两种模式区别

  - vue-router 有三种模式 hash history abstract.
    
  - 前两种是浏览器中的 利用浏览器原生api实现，
    abstract 模式是在不支持浏览器环境下使用  

  - hash模式：hash+popState/hasChange 兼容性好 路径有#号
              hash服务端无法获取，不利于seo优化 

  - history模式：historyApi+popState 路径没有#号 刷新出现404  
                 cli 中webpack 帮我们解决了404的问题 history-fallback          