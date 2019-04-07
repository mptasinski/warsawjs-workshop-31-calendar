const express = require('express');
const router = require('./../web/routing/base.router');
const supertest = require('supertest');

it('shoud run', async (done) => {
  const app = express();
  router(app);

  const response = await supertest(app)
    .get('/')
    .then((response) => {
      expect(response.body.status).toEqual('ok');
    });

  done(response);

});
