const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const { rules, shared, resolve, devServer } = require('webpack-config');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const { EnhancedTsconfigWebpackPlugin } = require('enhanced-tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: devServer(),
  resolve: {
    ...resolve,
  },
  module: {
    rules,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      exposes: {
        './context': './src/exposes/context.ts',
      },
      shared: {
        ...shared,
        './src/exposes/context.ts': {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
