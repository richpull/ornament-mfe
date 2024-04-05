module.exports = (port = 3000) => ({
  open: true,
  port,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  allowedHosts: 'all',
});
