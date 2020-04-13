import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel, LoginResponseModel,VitalRequestModel } from '../models/api-models';
import { Observable } from 'rxjs';

const BASE: string = 'http://localhost:3000/';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${BASE}login`, request);
  }

  save(request:VitalRequestModel){
    this.http.post(`${BASE}vital`, request).subscribe((data) => {});
  }

}
