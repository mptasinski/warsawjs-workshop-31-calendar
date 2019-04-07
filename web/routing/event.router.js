const express = require('express');
const Event = require('../../models/event.model');

const router = express.Router();

const saveEvent = async (data) => {
  if (!data.time) return 'empty';
  const model = new Event(data);
  const response = await model.save();
  return response._id;
};

const removeEvent = async (id) => {
  const response = await Event.deleteOne({ id });
  return response._id;
};

router.post('/api/event', async (request, response) => {

  if (request.body) {
    const result = await saveEvent(request.body);

    if (result) {
      return response.status(200).json({
        id: result
      })
    }
  }


  return response.status(500)


});

router.delete('/api/event', async (request, response) => {

  const result = await removeEvent(request.body.id);

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
