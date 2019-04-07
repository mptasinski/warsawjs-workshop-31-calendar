const express = require('express');
const path = require('path');
const router = require('./../web/routing/calendar.router');
const supertest = require('supertest');
const Ajv = require('ajv');

let app = null;
let ajv = null;


beforeEach(() => {
  app = express();
  router(app);
  ajv = new Ajv();
});

it('api calendar shoud return HTTP OK', async () => {

  const response = await supertest(app)
    .get('/api/calendar?month=2019-04')
    .expect(200);

  expect(response.status).toEqual(200);

});

it('calendar shoud return porpper data', async () => {

  const response = await supertest(app)
    .get('/api/calendar?month=2019-04')
    .expect(200);

  const validator = ajv.compile(require('./../docs/schemas/calendar.scheme'));
  const validate = validator(response.body);

  expect(validate).toBe(true);
  expect(validator.errors).toBeNull();

});
