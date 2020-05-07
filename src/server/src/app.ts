import express from 'express';
var cors = require('cors');
import * as bodyparser from 'body-parser';

import { MongoConnection, DoctorsCollection, VitalsCollection, PatientsCollection, DailyAssessmentsCollection, MedicationsCollection } from './db.service';

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

app.post('/vital/add/:id', (req, res) => {
  let vital = new VitalsCollection(req.body);
  vital.save((error,data) => {
    if(error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
  });
});

app.get('/vital/:id', (req, res, next) => {
  VitalsCollection.find({patientId:req.params.id}, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.put('/vital/edit/:id', (req, res, next) => {
  VitalsCollection.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.get('/vital/edit/:id', (req, res, next) => {
  VitalsCollection.findById(req.params.id, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.delete('/vital/delete/:id', (req, res, next) => {
  VitalsCollection.findByIdAndRemove(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

/*************** Patient ******************/

app.post('/patient/add', (req, res) => {
  let patient = new PatientsCollection(req.body);
   patient.save((error,data) => {
     if(error){
       res.send("Beklenmeyen bir hatayla karşılaşıldı...");
     } else{
       res.json(data);
     }
   });
});

app.get('/patient', (req, res) => {
  PatientsCollection.find({isActive:true}, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  });
});

app.put('/patient/edit/:id', (req, res, next) => {
  PatientsCollection.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.get('/patient/edit/:id', (req, res, next) => {
  PatientsCollection.findById(req.params.id, (err, post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.put('/patient/delete/:id', (req, res, next) => {
  PatientsCollection.findByIdAndUpdate(req.params.id, {isActive:false}, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

/**********************  Doctor *******************************/

app.get('/doctor', (req, res) => {
  DoctorsCollection.find({isActive:true}, (error, data) => {
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

  doctor.save((error,data) => {
    if(error){
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
  });
});

app.put('/doctor/edit/:id', (req, res, next) => {
  DoctorsCollection.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.get('/doctor/edit/:id', (req, res, next) => {
  DoctorsCollection.findById(req.params.id, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.put('/doctor/delete/:id', (req, res, next) => {
  DoctorsCollection.findByIdAndUpdate(req.params.id, {isActive:false}, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

/***************  Daily Assessment ********************* */

app.post('/dailyassessment/add/:id', (req, res) => {
  let dailyAssessment = new DailyAssessmentsCollection(req.body);

  dailyAssessment.save((error,data)=>{
    if(error){
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
  });
});

app.get('/dailyassessment/:id', (req, res, next) => {
  DailyAssessmentsCollection.find({patientId:req.params.id}, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.get('/dailyassessment/edit/:id', (req, res, next) => {
  DailyAssessmentsCollection.findById(req.params.id, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.put('/dailyassessment/edit/:id', (req, res, next) => {
  DailyAssessmentsCollection.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.delete('/dailyassessment/delete/:id', (req, res, next) => {
  DailyAssessmentsCollection.findByIdAndRemove(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

/********************* Medication *************************** */

app.post('/medication/add/:id', (req, res) => {
  let medication= new MedicationsCollection(req.body);

  medication.save((error,data) => {
    if(error){
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    } else{
      res.json(data);
    }
   });
});

app.get('/medication/:id', (req, res, next) => {
  MedicationsCollection.find({patientId:req.params.id}, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.get('/medication/edit/:id', (req, res, next) => {
  MedicationsCollection.findById(req.params.id, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.put('/medication/edit/:id', (req, res, next) => {
  MedicationsCollection.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});

app.delete('/medication/delete/:id', (req, res, next) => {
  MedicationsCollection.findByIdAndRemove(req.params.id, req.body, (err,post) => {
    if(err) return next(err);
    res.json(post);
  });
});



/**************************************************************** */

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});
