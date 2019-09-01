const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConf = require('./webpack.base.conf');
const util = require('./util');

module.exports = webpackMerge(baseConf, {
  mode: 'development',
  entry: {
    main: './examples/index.js'
  },
  output: {
    path: util.root('dist'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin({ template: util.root('./examples/public/index.html') })],
  devServer: {
    hot: true,
    port: 5555,
    open: true,
    historyApiFallback: true,
    contentBase: util.root('dist')
  }
});
