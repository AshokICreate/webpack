const path = require('path') // This is common.js

console.log('Ashok: 1', path.resolve(__dirname, 'build'));

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
        ]
      }
    ]
  }
}

console.log('Ashok: 2', path.resolve(__dirname, 'build'));

module.exports = config; // this is common.js
