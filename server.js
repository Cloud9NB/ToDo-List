const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const users = require('./routes/users');
const tasks = require('./routes/tasks');

app.use(cors());
app.use(express.json());
app.use('/api', users());
app.use('/api', tasks());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'view/build')));
}
app.listen(port, () =>
  console.log(
    `Express seems to be listening on port ${port} so that's pretty good 👍`
  )
);
