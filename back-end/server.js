require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.BACKEND_PORT;

const cors = require('cors');

const { Pool } = require('pg');
const dbParams = require('./lib/db');
const db = new Pool(dbParams);
db.connect();

app.use(cors());
app.use(express.json());

const users = require('./src/routes/users');
const tasks = require('./src/routes/tasks');
app.use('/api', users(db));
app.use('/api', tasks(db));

app.listen(port || 8001, () =>
  console.log(
    `Express seems to be listening on port ${port} so that's pretty good 👍`
  )
);
