const express = require('express');

const router = express.Router();

router.get('/api/event', (request, response) => {
  response.status(200).json({ status: "ok" })
});

module.exports = (app) => {
  app.use(router);
};
