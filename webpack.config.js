const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    './client/src/index.jsx',
    'webpack-hot-middleware/client'
  ],
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    isDevelopment && new webpack.NoEmitOnErrorsPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'client/src/components/App/'),
      Overview: path.resolve(__dirname, 'client/src/components/Overview/'),
      RelatedItems: path.resolve(__dirname, 'client/src/components/RelatedItems/'),
      Reviews: path.resolve(__dirname, 'client/src/components/Reviews/'),
      shared: path.resolve(__dirname, 'client/src/components/shared/'),
      assets: path.resolve(__dirname, 'client/src/assets/'),
      tests: path.resolve(__dirname, 'client/src/tests'),
    }
  }
};
