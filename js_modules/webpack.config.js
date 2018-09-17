const path = require('path') // This is common.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('Ashok: 1', path.resolve(__dirname, 'build'));

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
         test: /\.(gif|png|jpe?g|svg)$/i,
         use: [
           {
              loader: 'url-loader',
              options: { limit: 40000 } //if image of size lessthan 40kb include it in bundle.js
           },
           'image-webpack-loader'
         ]
      }
    ]
  }
}

console.log('Ashok: 2', path.resolve(__dirname, 'build'));

module.exports = config; // this is common.js
