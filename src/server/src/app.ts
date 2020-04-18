import express, { response } from 'express';
var cors = require('cors');
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection,VitalsCollection,PatientsCollection } from './db.service';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const db = new MongoConnection();


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

app.post('/vital/add', (req, res) => {
 let vital = new VitalsCollection(req.body);
  vital.save((error,data)=>{
    if(error){
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
  });
  
  

});

app.post('/patient/add', (req, res) => {
  let patient = new PatientsCollection(req.body);
   patient.save((error,data)=>{
     if(error){
       res.send("Beklenmeyen bir hatayla karşılaşıldı...");
     } else{
       res.json(data);
     }
   });
   
   
 
 });

 app.post('/doctor/add', (req, res) => {
  let doctor = new DoctorsCollection(req.body);
   doctor.save((error,data)=>{
     if(error){
       res.send("Beklenmeyen bir hatayla karşılaşıldı...");
     } else{
       res.json(data);
     }
   });
   
   
 
 });

 app.get('/patient', (req, res) => {
  
  PatientsCollection.find({}, (error, data) => {
    if (error) {
        res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
        res.json(data);
    }
});
   
   
 
 });
 app.get('/doctor', (req, res) => {
  
  DoctorsCollection.find({}, (error, data) => {
    if (error) {
        res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
        res.json(data);
    }
});
   
   
 
 });
 

 


app.put('/doctor/edit/:id', function(req, res, next)  {
  
  DoctorsCollection.findByIdAndUpdate(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
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

// PatientsCollection.find({},(err,patients)=>{
//   if(err) throw err;
//   console.log(patients);
// })