const deps = require('../../package.json').dependencies;

/**
 * Try @ornament-ui/kit sharing
 */

module.exports = {
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: deps['react-dom'],
  },
  // '@ornament-ui/kit': { // Dialog, Select and other kit components
  //   singleton: true,
  //   requiredVersion: deps['@ornament-ui/kit'],
  // }
};
