// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = 'style-loader';

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),


  //   // Add your plugins here
  //   // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        loader: 'babel-loader',
        options: {
          plugins: isProduction ? [] : ['react-refresh/babel'],
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },


      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'client/src/components/App/'),
      Overview: path.resolve(__dirname, 'client/src/components/Overview/'),
      RelatedItems: path.resolve(__dirname, 'client/src/components/RelatedItems/'),
      Reviews: path.resolve(__dirname, 'client/src/components/Reviews/'),
    }
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
