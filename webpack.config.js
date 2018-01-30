path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './pages/index',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'main.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        },
        exclude: path.resolve(__dirname, 'node_modules/')
      }
    ]
  }
};