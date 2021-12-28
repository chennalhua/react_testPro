const { createProxyMiddleware } = require('http-proxy-middleware');
// const fs = require('fs');
module.exports = function(app) {
  const apiProxy = createProxyMiddleware('/api', {
    target: 'https://ismart2.goldennet.com.tw:5000',
    changeOrigin: true,
    "secure": false,
  });

  app.use(apiProxy);
};