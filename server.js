const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());


app.use('/proxy', createProxyMiddleware({
  target: 'https://www.roblox.com/login', 
  changeOrigin: true,
  pathRewrite: { '^/proxy': '' } 
}));

app.listen(PORT, () => {
  console.log(`Interstellar Proxy running on http://localhost:${PORT}`);
});
