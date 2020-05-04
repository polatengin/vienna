import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginRequestModel } from '../../models/api-models';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPageComponent {
  
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Login');
  }
  
  request: LoginRequestModel = new LoginRequestModel();

  login() {
    this.api.login(this.request).subscribe(_ => {  
      if (_ && _.isActive) {
        sessionStorage.setItem('onlineUser', _._id);
        this.router.navigate(['/patient']);
      }
    });
  }

}
