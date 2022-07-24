const express = require('express');
const app = express();
const port = 8001;
const bodyParser = require('body-parser');

const cors = require('cors');

const { Pool } = require('pg');
require('dotenv').config();
const dbParams = require('./lib/db');
const db = new Pool(dbParams);
db.connect();

const users = require('./src/routes/users');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', users(db));

app.listen(port, () => {
  console.log(
    `Express seems to be listening on port ${port} so that's pretty good 👍`
  );
});
