var app = require('koa')(),
  koa = require('koa-router')(),
  json = require('koa-json');

var index = require('./routes/index');

app.use(require('koa-bodyparser')());
app.use(json());

koa.use('/', index.routes(), index.allowedMethods());

app.use(koa.routes());

module.exports = app;
