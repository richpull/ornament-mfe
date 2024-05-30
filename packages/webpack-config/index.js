const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = ({ port, mode }) => {
  const dev = mode === 'development';

  const plugins = [];

  const config = {
    mode,
    output: {
      // filename: '[name].bundle.js',
      // chunkFilename: '[id].chunk.js',
      scriptType: 'text/javascript',
    },
    resolve: require('./resolve'),
    module: require('./module')(dev),
    plugins,
  };

  if (dev) {
    config.devServer = require('./devServer')(port);
    config.devtool = 'source-map';
    config.optimization = {
      runtimeChunk: false,
      minimize: false,
    };
    // config.plugins.push(new ReactRefreshWebpackPlugin());
  }

  return config;
};
