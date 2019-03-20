const path = require('path');

module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}