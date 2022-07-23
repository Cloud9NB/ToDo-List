const express = require('express');
const app = express();
const port = 8001;
const cors = require('cors');

const { Pool } = require('pg');
require('dotenv').config();
const dbParams = require('./lib/db');
const db = new Pool(dbParams);
db.connect();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(
    `Express seems to be listening on port ${port} so that's pretty good 👍`
  );
});
