const express = require('express');

const router = express.Router();

router.get('/api/calendar', (request, response) => {
  response.status(200).json({
    data: {

    }
  })
});

module.exports = (app) => {
  app.use(router);
};
