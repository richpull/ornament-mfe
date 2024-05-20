const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const { rules, shared, resolve, devServer } = require('webpack-config');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: devServer(3001),
  resolve,
  module: {
    rules,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './WithProvider': './src/exposes/WithProvider',
      },
      remotes: {
        host: 'host@http://localhost:3000/mf-manifest.json',
      },
      shared,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: 'http://localhost:3001/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
