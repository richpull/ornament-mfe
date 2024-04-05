const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const deps = require('../../package.json').dependencies;
const { rules, resolve, devServer } = require('webpack-config');

const conf = {
  name: 'remote1',
  filename: 'remoteEntry.js',
  exposes: {
    './WithProvider': './src/exposes/WithProvider',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: devServer(3001),
  resolve,
  module: {
    rules,
  },
  plugins: [
    new ModuleFederationPlugin(conf),
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
