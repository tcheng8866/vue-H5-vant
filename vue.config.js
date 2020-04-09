module.exports = {
  publicPath: './', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: true, // 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  //反向代理
  devServer: {
    // 环境配置
    host: 'localhost',  
    port: 8888,
    https: false,  //是否以https启动
    hotOnly: false,
    open: false, //配置自动启动浏览器(按照devServer的配置host:port)
    proxy: {
      // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      '/api': {   // 拦截前端XXX开头的请求(仅特定接口, 剔除img等资源)
        target: 'sn.ac.10086.cn/mall/vpclub/vp:8080',  // 目标地址
		ws: true,
		changeOrigin: true,  //跨域支持, 这也是配置proxy的主要目的
        // pathRewrite: {
        //   '^/api': ''  // 剔除掉前端加的xxx, 因正式请求无xxx
        // }
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
}