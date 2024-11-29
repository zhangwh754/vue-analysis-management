const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
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
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
})
