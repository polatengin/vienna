import express from 'express';
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection } from './db.service';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const db = new MongoConnection();

db.init(process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD);

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).send('Vienna is working 🥳');
});

app.post('/login', (req, res) => {
  let query = {
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    isActive: true
  };
  DoctorsCollection.findOne(query, (error, _) => {
    if (error) {
      res.status(404).send(error);
    }
    res.json(_ || {});
  });
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});
