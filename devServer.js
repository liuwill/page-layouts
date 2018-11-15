'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});
const server = new WebpackDevServer(compiler, devServerOptions);
const PORT = devServerOptions.port || 9000

server.listen(PORT, '127.0.0.1', (err) => {
  console.log(`Starting server on http://localhost:${PORT}`);
});
