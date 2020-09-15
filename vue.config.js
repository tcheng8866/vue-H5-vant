module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // dist目录有两部分：1.webpack打包文件放在assetsDir; 2.public静态资源原样copy文件（根目录别再创建static）
  indexPath: 'index.html',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: true,
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {}
}
