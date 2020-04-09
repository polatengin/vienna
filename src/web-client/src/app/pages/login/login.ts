import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginRequestModel } from '../../models/api-models';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPageComponent {

  constructor(private api: ApiService, private router: Router) {
  }

  request: LoginRequestModel = new LoginRequestModel();

  login() {
    this.api.login(this.request).subscribe(_ => {
      if (_ && _.isActive) {
        this.router.navigate(['/patient-list']);
      }
    });
  }

}
