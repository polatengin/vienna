import express, { response } from 'express';
var cors = require('cors');
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection,VitalsCollection } from './db.service';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const db = new MongoConnection();

// let vital=new VitalsCollection({
//   respiration: "Normal",
//   pulse: "65",
//   temperature: "39",
//   bloodPressure1: "11",
//   bloodPressure2: "6"
// });

// vital.save((err,result)=>{
//   if(err) throw err;
//   console.log(result);
// })





db.init(process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD);

app.use(cors({origin: 'http://localhost:4200'}));
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
  let select = {
    isActive: 1
  };
  DoctorsCollection.findOne(query, select, (error, _) => {
    if (error) {
      res.status(404).send(error);
    }
    res.json(_ || {});
  });
});

app.post('/vital', (req, res) => {
 let vital = new VitalsCollection({
  respiration: req.body.respiration,
  pulse: req.body.pulse,
  temperature: req.body.temperature,
  bloodPressure1: req.body.bloodPressure1,
  bloodPressure2: req.body.bloodPressure2
  });
  vital.save((error,data)=>{
    if(error){
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
  });
  
  

});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});

// VitalsCollection.find({},(err,vitals)=>{
//   if(err) throw err;
//   console.log(vitals);
// })

// DoctorsCollection.find({},(err,doctors)=>{
//   if(err) throw err;
//   console.log(doctors);
// })