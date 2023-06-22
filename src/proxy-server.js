const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Create a proxy middleware
const proxyOptions = {
  target: 'http://chovy.freeboxos.fr:6345',
  changeOrigin: true, // Enable this option for the proxy to rewrite the host headers
};
const proxy = createProxyMiddleware(proxyOptions);

// Use the proxy middleware for the desired route
app.use('/processRequest', proxy);

// Start the proxy server
app.listen(3001, () => {
  console.log('Proxy server is running on port 3001');
});
