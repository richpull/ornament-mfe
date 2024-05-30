const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const shared = require('webpack-config/shared');
const deps = require('../../package.json');

module.exports = () =>
  new ModuleFederationPlugin({
    name: 'remote1',
    filename: 'remoteEntry.js',
    exposes: {
      './WithProvider': './src/exposes/WithProvider',
    },
    remotes: {
      host: 'host@http://localhost:3000/mf-manifest.json',
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
    },
  });
