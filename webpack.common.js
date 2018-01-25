const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: 'Wiiiiish',
    libraryTarget: 'var'
  },
  performance: {
    hints: false,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Wiiiiish',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
