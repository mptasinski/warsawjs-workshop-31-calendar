const express = require('express');
const router = require('./../web/routing/event.router');
const supertest = require('supertest');
const Ajv = require('ajv');
const bodyParser = require('body-parser');
const Event = require('../models/event.model');
const db = require('../db');

let app = null;
let ajv = null;


beforeAll(() => {
  (async () => {
    await db.connect();

    console.log('db connected')
  })();
});

beforeEach(() => {
  app = express();
  app.use(bodyParser.json());
  router(app);
  ajv = new Ajv();
});

it('api calendar shoud return HTTP OK', async () => {

  const response = await supertest(app)
    .post('/api/event')
    .expect(200);

  expect(response.status).toEqual(200);

});

it('calendar shoud return porpper data', async () => {

  const response = await supertest(app)
    .post('/api/event')
    .expect(200);

  const validator = ajv.compile(require('./../docs/schemas/event.scheme'));
  const validate = validator(response.body);

  expect(validate).toBe(true);
  expect(validator.errors).toBeNull();

});

it('should save data to db', async () => {

  const postData = {"description":"Desc","notification":true,"time":"2019-04-07T00:00","title":"Title"};

  const response = await supertest(app)
    .post('/api/event')
    .send(postData)
    .set('Accept', 'application/json')
    .expect(200);

  const finded = await Event.find(postData);
  expect(response.status).toEqual(200);
  expect(finded.length).toEqual(1);

  await Event.deleteOne(postData)

});
