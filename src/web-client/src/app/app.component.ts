import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.fill-space { flex: 1 1 auto; }']
})
export class AppComponent {
  constructor(private loginService: LoginService) {
  }

  isLoggedIn$: Observable<boolean>;
  hasBack$: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.hasBack$ = this.loginService.hasBack;
  }
}
