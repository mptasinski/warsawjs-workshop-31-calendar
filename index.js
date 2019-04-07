const path = require('path');
const express = require('express');
const router = require('./web/routing/base.router');
require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
});

const { PORT } = process.env;

const app = express();

router(app);

app.listen(PORT, () => {
  console.log(
    `Server started on port: ${PORT}`
  )
});
