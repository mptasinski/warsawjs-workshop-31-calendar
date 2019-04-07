const path = require('path');
const express = require('express');
require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
});

const { PORT } = process.env;

const app = express();

require('./web/routing/base.router')(app);

app.listen(PORT, () => {
  console.log(
    `Server started on port: ${PORT}`
  )
});
