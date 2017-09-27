const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: 'postcss-loader' // 加前缀
      }, {
        loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
}

module.exports = config