import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel, LoginResponseModel } from '../models/api-models';
import { Observable } from 'rxjs';

const BASE: string = 'http://localhost:3000/';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

}
