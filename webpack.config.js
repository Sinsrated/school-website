const path = require('path');


module.exports = {
  output: {
    filename: 'school-website.js',
  },
  module: {
    rules: [{test: /\.js$/, use: 'babel-loader'}],
  },
} 