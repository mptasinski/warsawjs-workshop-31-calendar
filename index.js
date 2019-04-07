const path = require('path');
const express = require('express');
const baseRouter = require('./web/routing/base.router');
const calendarRouter = require('./web/routing/calendar.router');
const eventRouter = require('./web/routing/event.router');
const bodyParser = require('body-parser');


require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
});

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

baseRouter(app);
calendarRouter(app);
eventRouter(app);

app.listen(PORT, () => {
  console.log(
    `Server started on port: ${PORT}`
  )
});
