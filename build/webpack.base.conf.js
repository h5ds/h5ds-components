const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = webpackMerge({
  target: 'web',
  mode: 'production',
  stats: 'minimal',
  module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'], exclude: [/build/] },
      {
        test: /\.css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
