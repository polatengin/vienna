import { Component } from '@angular/core';

import { LoginRequestModel } from '../../models/api-models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPageComponent {

  constructor(private api: ApiService) {
  }

  request: LoginRequestModel = new LoginRequestModel();

  login() {
    this.api.login(this.request).subscribe(_ => {
    });
  }

}
