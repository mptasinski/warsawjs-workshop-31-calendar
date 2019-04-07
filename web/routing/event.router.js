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
  return  await Event.deleteOne({ _id: id });
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

router.delete('/api/event/:id', async (request, response) => {

  const result = await removeEvent(request.params.id);

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
