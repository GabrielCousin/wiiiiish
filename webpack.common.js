const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/wiiiiish.js',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: 'Wiiiiish',
    libraryExport: 'default',
    libraryTarget: 'window'
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
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
