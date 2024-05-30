const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const shared = require('webpack-config/shared');
const deps = require('../../package.json');

module.exports = () =>
  new ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',
    exposes: {
      './context': './src/exposes/context.ts',
    },
    remotes: {
      remote1: 'remote1@http://localhost:3001/mf-manifest.json',
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
    // shared: {
    //   ...shared,
    //   // './src/exposes/context.ts': {
    //   //   singleton: true,
    //   //   // version: '1.0.0',
    //   // },
    // },
  });
