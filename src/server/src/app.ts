import express, { response } from 'express';
var cors = require('cors');
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection,VitalsCollection,PatientsCollection,DailyAssessmentsCollection,MedicationsCollection } from './db.service';

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

/*************** Vital **********************/

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

app.get('/vital/:id', function(req, res, next)  {
  
  VitalsCollection.find({patientId:req.params.id}, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.put('/vital/edit/:id', function(req, res, next)  {
  
  VitalsCollection.findByIdAndUpdate(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.get('/vital/edit/:id', function(req, res, next)  {
  
  VitalsCollection.findById(req.params.id, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.delete('/vital/delete/:id', function(req, res, next)  {
  
  VitalsCollection.findByIdAndRemove(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

/***************   Patient **************** */
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
 app.put('/patient/edit/:id', function(req, res, next)  {
  
  PatientsCollection.findOneAndUpdate({patientId:req.params.id}, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.get('/patient/edit/:id', function(req, res, next)  {
  
PatientsCollection.findOne({patientId:req.params.id}, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.delete('/patient/delete/:id', function(req, res, next)  {
  
  PatientsCollection.findOneAndRemove({patientId:req.params.id}, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});
 /**********  Doctor ***************/
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
 


app.put('/doctor/edit/:id', function(req, res, next)  {
  
  DoctorsCollection.findByIdAndUpdate(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.get('/doctor/edit/:id', function(req, res, next)  {
  
  DoctorsCollection.findById(req.params.id, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.delete('/doctor/delete/:id', function(req, res, next)  {
  
  DoctorsCollection.findByIdAndRemove(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

/***************  Daily Assessment ********************* */

app.post('/dailyassessment/add', (req, res) => {
  let dailyAssessment = new DailyAssessmentsCollection(req.body);
   dailyAssessment.save((error,data)=>{
     if(error){
       res.send("Beklenmeyen bir hatayla karşılaşıldı...");
     } else{
       res.json(data);
     }
   });
   
   
 
 });

 app.get('/dailyassessment/:id', function(req, res, next)  {
  
  DailyAssessmentsCollection.find({patientId:req.params.id}, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.get('/dailyassessment/edit/:id', function(req, res, next)  {
  
  DailyAssessmentsCollection.findById(req.params.id, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.put('/dailyassessment/edit/:id', function(req, res, next)  {
  
  DailyAssessmentsCollection.findByIdAndUpdate(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

app.delete('/dailyassessment/delete/:id', function(req, res, next)  {
  
  DailyAssessmentsCollection.findByIdAndRemove(req.params.id, req.body, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});


/********************* Medication *************************** */
app.post('/medication/add', (req, res) => {
  let medication= new MedicationsCollection(req.body);
   medication.save((error,data)=>{
     if(error){
       res.send("Beklenmeyen bir hatayla karşılaşıldı...");
     } else{
       res.json(data);
     }
   });
   
   
 
 });

 app.get('/medication/:id', function(req, res, next)  {
  
  MedicationsCollection.find({patientId:req.params.id}, function(err,post) {
    if(err) return next(err);
    res.json(post);
   });
});

 /**************************************************************** */


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

