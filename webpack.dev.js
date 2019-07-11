const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: 3000,
    watchOptions: {
      ignored: /node_modules/,
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('autoprefixer')()
                ]
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})
