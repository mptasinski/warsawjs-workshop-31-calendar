const express = require('express');

const router = express.Router();

router.get('/api/calendar', (request, response) => {
  response.status(200).json({
    "data": [
      {
        "date": "2019-04-01",
        "events": [{
          id: 'asdasd',
          title: 'dupa'
        }]
      },
    ]
  })
});

module.exports = (app) => {
  app.use(router);
};
