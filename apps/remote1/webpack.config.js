const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const create = require('webpack-config');
const mf = require('./moduleFederation');
const path = require('path');

module.exports = (_, { mode, port }) => {
  const baseConfig = create({ port, mode });

  baseConfig.plugins = [
    ...baseConfig.plugins,
    mf(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    // new HotModuleReplacementPlugin(),
  ];

  if (mode === 'development') {
    baseConfig.devServer.static = { directory: path.join(__dirname, 'dist') };
    baseConfig.output.publicPath = `http://localhost:${port}/`;
  } else {
    // baseConfig.output.publicPath = '/';
    // baseConfig.output.path = path.resolve(__dirname, 'dist');
  }

  return baseConfig;
};
