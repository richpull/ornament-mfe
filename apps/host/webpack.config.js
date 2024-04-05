const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const { rules, shared, resolve, devServer } = require('webpack-config');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: devServer(),
  resolve,
  module: {
    rules,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        remote1: 'remote1@http://localhost:3001/remoteEntry.js',
      },
      shared,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
