module.exports = (port) => ({
  open: true,
  port,
  hot: true,
  historyApiFallback: true,
  headers: {
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  allowedHosts: 'all',
});
