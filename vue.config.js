module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2019',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  // webpack配置节点
  configureWebpack: {
    // 插件配置
    plugins: [],
    // webpack-load配置
    module: {
      rules: [
        {
          test: require.resolve('snapsvg/dist/snap.svg.js'),
          use: 'imports-loader?this=>window,fix=>module.exports=0'
        }
      ]
    },
    resolve: {
      alias: {
        snapsvg: 'snapsvg/dist/snap.svg.js'
      }
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('snapsvg')
  //     .test(require.resolve('snapsvg'))
  //     .use('imports-loader?this=>window,fix=>module.exports=0')
  //     .loader('imports-loader')
  //     .end()
  // }
}
