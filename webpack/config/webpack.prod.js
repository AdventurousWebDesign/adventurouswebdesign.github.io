const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const webfonts = require('./webfonts');

module.exports = Merge(
  CommonConfig,
  {
    mode: 'production',
    output: {
      filename: '[name]-[hash].bundle.js',
      path: path.resolve(`${__dirname}'/../../jekyll/assets`),
      publicPath: '../../jekyll/assets/',
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new ExtractTextPlugin('[name]-[hash].css'),
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
        chunkFilename: '[id].css',
      }),
      new GoogleFontsPlugin(Merge(webfonts, {})),
    ],
  },
);

