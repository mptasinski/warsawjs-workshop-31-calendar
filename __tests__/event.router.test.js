const express = require('express');
const router = require('./../web/routing/event.router');
const supertest = require('supertest');
const Ajv = require('ajv');
const bodyParser = require('body-parser');

let app = null;
let ajv = null;


beforeEach(() => {
  app = express();
  router(app);
  app.use(bodyParser.json());
  ajv = new Ajv();
});

it('api calendar shoud return HTTP OK', async () => {

  const response = await supertest(app)
    .get('/api/event')
    .expect(200);

  expect(response.status).toEqual(200);

});

it('calendar shoud return porpper data', async () => {

  const response = await supertest(app)
    .get('/api/event')
    .expect(200);

  const validator = ajv.compile(require('./../docs/schemas/event.scheme'));
  const validate = validator(response.body);

  expect(validate).toBe(true);
  expect(validator.errors).toBeNull();

});
