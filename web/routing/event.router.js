const express = require('express');
const Event = require('../../models/event.model');

const router = express.Router();

const saveEvent = async (data) => {
  const model = new Event(data);
  const response = await model.save();
  return response._id;
};

router.post('/api/event', async (request, response) => {

  const result = await saveEvent(request.body);

  if (result) {
    response.status(200).json({
      id: result
    })
  } else {
    response.status(500)
  }

});

router.delete('/api/event', async (request, response) => {

  const result = await saveEvent(request.body);

  if (result) {
    response.status(200).json({
      id: result
    })
  } else {
    response.status(500)
  }

});

module.exports = (app) => {
  app.use(router);
};
