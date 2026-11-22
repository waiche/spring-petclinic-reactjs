const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __API_SERVER_URL__: JSON.stringify('http://localhost:8080')
    })
  ]
};
