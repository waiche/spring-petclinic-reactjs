const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __API_SERVER_URL__: JSON.stringify('http://localhost:9966/petclinic')
    })
  ],
  devServer: {
    port: process.env.PORT || 3000,
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true
  }
};
