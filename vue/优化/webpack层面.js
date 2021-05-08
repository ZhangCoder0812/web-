/* 

  vue.config.js
    
    webpack的配置
    configureWebpack:{ 

    }


  1. 使用alias配置路径别名，减少文件检索范围，

  2. 利用splitChunks 提取公共js代码 分割js代码

  3. 利用image-webpack-loader 压缩图片

  4. 引入DllPlugin 和 DllReferencePlugin 动态链接库 分离出不需要跟新的包

  5. thread-loader 多进程打包

  6. 利用@babel/plugin-transform-runtime 解决语法转换时生成的冗余代码

  7. resolve.modules 减小文件搜索范围

  8. 设置 noParse 减少不必要的解析

  9. 利用externals提取第三次依赖 并用CDN引入347


*/