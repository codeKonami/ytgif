const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/ytgif.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ytgif.min.js',
    libraryTarget: 'umd',
    library: 'ytgif'
  },
  devServer: {
    contentBase: __dirname + '/lib',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
