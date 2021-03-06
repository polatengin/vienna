import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginRequestModel, LoginResponseModel, VitalRequestModel, NewPatientRequestModel, DailyAssessmentRequestModel, MedicationRequestModel, PatientListResponseModel, NewDoctorRequestModel, UpdateDoctorRequestModel, GetPatientResponseModel,EditPatientRequestModel } from '../models/api-models';

const BASE: string = 'http://localhost:3000/';

@Injectable()
export class ApiService {
  patientName;
  doctorName;
  constructor(private http: HttpClient) {}

  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${BASE}login`, request);
  }

  save(request: VitalRequestModel) {
    return this.http.post(`${BASE}vital/add/${request.patientId}`, request);
  }

  savePatient(request: NewPatientRequestModel) {
    return this.http.post(`${BASE}patient/add`, request);
  }

  saveDoctor(request: NewDoctorRequestModel) {
    return this.http.post(`${BASE}doctor/add`, request);
  }

  saveDailyAssessment(request: DailyAssessmentRequestModel) {
    return this.http.post(`${BASE}dailyassessment/add/${request.patientId}`, request);
  }

  saveMedication(request: MedicationRequestModel) {
    return this.http.post(`${BASE}medication/add/${request.patientId}`, request);
  }

  updateDoctor(request: UpdateDoctorRequestModel) {
   return this.http.put(`${BASE}doctor/edit/${request._id}`, request);
  }

  updatePatient(request: EditPatientRequestModel) {
    return this.http.put(`${BASE}patient/edit/${request._id}`, request);
  }

  updateVital(request: VitalRequestModel) {
    return this.http.put(`${BASE}vital/edit/${request._id}`, request);
  }

  updateDailyAssessment(request: DailyAssessmentRequestModel) {
    return this.http.put(`${BASE}dailyassessment/edit/${request._id}`, request);
  }

  updateMedication(request: MedicationRequestModel) {
    return this.http.put(`${BASE}medication/edit/${request._id}`, request);
  }

  deleteVital(vitalId: number) {
    return this.http.delete(`${BASE}vital/delete/${vitalId}`);
  }

  deleteMedication(medicationId: number) {
    return this.http.delete(`${BASE}medication/delete/${medicationId}`);
  }

  deleteDailyAssessment(dailyAssessmentId: number) {
    return this.http.delete(`${BASE}dailyassessment/delete/${dailyAssessmentId}`);
  }

  deletePatient(patientId: number,isActive:boolean) {
    return this.http.put(`${BASE}patient/delete/${patientId}`,isActive);
  }

  deleteDoctor(doctorId: number,isActive:boolean) {
    return this.http.put(`${BASE}doctor/delete/${doctorId}`,isActive);
  }

  getPatients(): Observable<PatientListResponseModel[]> {
   return this.http.get<PatientListResponseModel[]>(`${BASE}patient`);
  }

  getDoctors() {
    return this.http.get(`${BASE}doctor`);
  }

  getDoctor(doctorId: number) {
    return this.http.get(`${BASE}doctor/edit/${doctorId}`);
  }

  getPatient(patientId: number): Observable<GetPatientResponseModel> {
    return this.http.get<GetPatientResponseModel>(`${BASE}patient/edit/${patientId}`);
  }

  getDailyAssessments(patientId: number) {
    return this.http.get(`${BASE}dailyassessment/${patientId}`);
  }

  getMedications(patientId: number) {
    return this.http.get(`${BASE}medication/${patientId}`);
  }

  getMedication(medicationId: number) {
    return this.http.get(`${BASE}medication/edit/${medicationId}`);
  }

  getVitals(patientId: number) {
    return this.http.get(`${BASE}vital/${patientId}`);
  }

  getVital(vitalId: number) {
    return this.http.get(`${BASE}vital/edit/${vitalId}`);
  }

  getDailyAssessment(dailyAssessmentId: number) {
    return this.http.get(`${BASE}dailyassessment/edit/${dailyAssessmentId}`);
  }
}
