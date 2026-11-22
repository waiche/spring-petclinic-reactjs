const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'src/styles'),
        use: [
          'style-loader',
          'css-loader',
          // Bootstrap 3 relies on Less 2/3 math semantics
          { loader: 'less-loader', options: { lessOptions: { math: 'always' } } }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 25000 } }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name][ext]' }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
