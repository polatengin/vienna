import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private loginService: LoginService) {
  }

  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }
}
