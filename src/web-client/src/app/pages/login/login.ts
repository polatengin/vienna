import { Component } from '@angular/core';

import { LoginRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPageComponent {

  request: LoginRequestModel = new LoginRequestModel();

}
