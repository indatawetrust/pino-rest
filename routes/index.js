var router = require('koa-router')(),
  pino = require('pino')({
    prettyPrint: true,
  });

router.post('/error', function*(next) {
  pino.error(this.request.body.text);

  this.body = {
    ok: true,
  };
});

router.post('/warn', function*(next) {
  pino.warn(this.request.body.text);

  this.body = {
    ok: true,
  };
});

router.post('/info', function*(next) {
  pino.info(this.request.body.text);

  this.body = {
    ok: true,
  };
});

module.exports = router;
