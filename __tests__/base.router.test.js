const express = require('express');
const router = require('./../web/routing/base.router');
const supertest = require('supertest');

it('shoud run', async () => {
  const app = express();
  router(app);

  const response = await supertest(app)
    .get('/')
    .expect(200);

  expect(response.body.status).toEqual('ok');

});
