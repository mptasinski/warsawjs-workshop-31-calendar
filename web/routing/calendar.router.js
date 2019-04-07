const express = require('express');
const router = express.Router();
const calendar = require('../services/calendar');

router.get('/api/calendar', (request, response) => {
  response.status(200).json({
    "data":
      calendar(request.params.month)
  })
});

module.exports = (app) => {
  app.use(router);
};
