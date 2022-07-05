const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const apicache = require('apicache')
require('dotenv').config()

const app = express()

let cache = apicache.middleware

app.use(cache('15 minutes'))

const onProxyReq = function (proxyReq, req, res) {
    proxyReq.setHeader('X-RapidAPI-Key', process.env.TENNIS_APP_API_KEY)
    proxyReq.setHeader('X-RapidAPI-Host', process.env.TENNIS_APP_HOST)
};

const proxyOptions = {
    target: `https://${process.env.TENNIS_APP_HOST}`,
    onProxyReq: onProxyReq,
    changeOrigin: true,
    logger: console,
}

app.use('/', createProxyMiddleware(proxyOptions));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Tennis API proxy listening on port ${process.env.SERVER_PORT}`)
})