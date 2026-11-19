const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

module.exports = {
  context: srcPath,
  target: 'web',
  entry: ['./index.jsx'],
  output: {
    filename: 'app.[contenthash].js',
    path: path.join(__dirname, '/dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(path.join(__dirname, '/node_modules')),
      path.resolve(srcPath)
    ]
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/i,
      include: srcPath,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    }, {
      test: /\.css$/i,
      include: srcPath,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif)$/i,
      type: 'asset',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: path.join(srcPath, 'assets/images/favicon.png')
    })
  ],
  devServer: {
    port: 80,
    host: '0.0.0.0',
    hot: true,
    allowedHosts: 'all',
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};
