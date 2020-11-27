const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server_bundle.js'
  },

  node: {
    fs: 'empty',
    tls: 'empty',
    dgram: 'empty',
    ws: 'empty',
  },
  plugins: [new ESLintPlugin({
    
  })],
};