'use strict';
// const awsServerlessExpress = require('aws-serverless-express');
// const app = require('./build/server');
// const server = awsServerlessExpress.createServer(app);
// exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);

const serverless = require('serverless-http');
const app = require('./build/server');
module.exports.handler = serverless(app);
