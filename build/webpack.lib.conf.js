const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const util = require('./util');

module.exports = webpackMerge(baseConf, {
  mode: 'production',
  entry: {
    'h5ds-components': './src/index.js'
  },
  output: {
    path: util.root('dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
});
