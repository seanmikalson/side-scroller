var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: "./"
  },
  entry: [
    './src/js/main'
  ],
  output: {
      path: './bundle',
      filename: 'side-scroller.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      }
    ]
  },
  debug: true
};
