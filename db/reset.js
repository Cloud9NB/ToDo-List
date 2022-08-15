require('dotenv').config();
const { db } = require('./index');
db.connect();

const deleteCreate = require('./schema/create');
const promise = [db.query(deleteCreate)];

Promise.all([promise])
  .then(() => console.log('DB reset completed!'))
  .then(() => db.end())
  .catch(err => console.log('Failed to reset', err));
