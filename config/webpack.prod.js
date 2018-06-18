const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
});
