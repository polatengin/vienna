import express from 'express';
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection } from './db.service';

require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).send('Vienna is working 🥳');
});

app.post('/login', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});
