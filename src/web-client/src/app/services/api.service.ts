import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel, LoginResponseModel,VitalRequestModel,NewPatientRequestModel } from '../models/api-models';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

const BASE: string = 'http://localhost:3000/';

@Injectable()
export class ApiService {
  patientName;
  doctorId;
  patientId;
  vitalId;
  
  constructor(private http: HttpClient) {}

  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${BASE}login`, request);
  }

  

  save(request:VitalRequestModel){
    this.http.post(`${BASE}vital/add`, request).subscribe((data) => {});
  }

  savePatient(request:NewPatientRequestModel){
    this.http.post(`${BASE}patient/add`, request).subscribe((data) => {});
  }

  saveDoctor(request:Doctor){
    this.http.post(`${BASE}doctor/add`, request).subscribe((data) => {});
  }

  updateDoctor(request:Doctor){
   return this.http.put(`${BASE}doctor/edit/`+ this.doctorId, request).subscribe((data) => {});
   
  }

  updatePatient(request:NewPatientRequestModel){
    return this.http.put(`${BASE}patient/edit/`+ this.patientId, request).subscribe((data) => {});
    
   }

   updateVital(request:VitalRequestModel){
    return this.http.put(`${BASE}patient/edit/`+ this.vitalId, request).subscribe((data) => {});
    
   }

  getPatients(){
   return this.http.get(`${BASE}patient`);
  }

  getDoctors(){
    return this.http.get(`${BASE}doctor`);
   }
   
   getDoctor(){
    return this.http.get(`${BASE}doctor/edit/`+ this.doctorId);
   }

   getPatient(){
    return this.http.get(`${BASE}patient/edit/`+ this.patientId);
   }

   getVitals(){
    return this.http.get(`${BASE}vital/`+ this.patientId);
   }

   getVital(){
    return this.http.get(`${BASE}vital/edit/`+ this.vitalId);
   }
   


}
