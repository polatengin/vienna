import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel, LoginResponseModel,VitalRequestModel,NewPatientRequestModel } from '../models/api-models';
import { Observable } from 'rxjs';

const BASE: string = 'http://localhost:3000/';

@Injectable()
export class ApiService {
  patientName;
  
  constructor(private http: HttpClient) {}

  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${BASE}login`, request);
  }

  

  save(request:VitalRequestModel){
    this.http.post(`${BASE}vital`, request).subscribe((data) => {});
  }

  savePatient(request:NewPatientRequestModel){
    this.http.post(`${BASE}new-patient`, request).subscribe((data) => {});
  }

  getPatients(){
   return this.http.get(`${BASE}patient-list`);
  }

}
