const shared = require('./shared');
const rules = require('./rules');
const resolve = require('./resolve');
const devServer = require('./devServer');

module.exports = {
  rules,
  devServer,
  resolve,
  shared,
};
