const path = require('path');
const mongoose = require('mongoose');


require('dotenv').config({
  path: path.join(__dirname, 'config', 'db.env')
});

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const options = { useNewUrlParser: true };

module.exports = {
  connect() {
    mongoose.connect(connectionString, options)
  }
};
