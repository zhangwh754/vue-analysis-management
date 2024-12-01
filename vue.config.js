const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = function () {
  return defineConfig({
    publicPath: process.env.PUBLIC_PATH,
    pages: {
      index: {
        entry: 'src/index/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'Login',
      },
      'app-list': {
        entry: 'src/appList/main.js',
        template: 'public/index.html',
        filename: 'app-list.html',
        title: 'Select Application',
      },
      app1: {
        entry: 'src/app1/main.js',
        template: 'public/index.html',
        filename: 'app1.html',
        title: 'Management System 1',
      },
      app2: {
        entry: 'src/app2/main.js',
        template: 'public/index.html',
        filename: 'app2.html',
        title: 'Management System 2',
      },
    },
    css: {
      extract: true, // 是否提取css
      sourceMap: false,
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/styles/variables.scss";`,
        },
      },
    },
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
      devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 20000, // 20kb
          maxSize: 100000, // 100kb
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 10,
          cacheGroups: {
            packages: {
              test: /[\\/]node_modules[\\/]/,
              priority: 10, // Increased priority
              name(module) {
                // Simplified naming for better caching
                const packageMatch = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
                return packageMatch ? `package.${packageMatch[1]}` : 'vendors'
              },
              chunks: 'all',
              enforce: true,
            },
            common: {
              name: 'chunk-common',
              minChunks: 2,
              priority: 5,
              chunks: 'initial',
              reuseExistingChunk: true,
            },
          },
        },
      },
      performance: false,
      plugins: [
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|svg|png|jpg)$/,
          deleteOriginalAssets: false, // 不删除源文件
          threshold: 10240, // 对超过10k的数据压缩
        }),
      ],
    },
  })
}
