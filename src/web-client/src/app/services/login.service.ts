import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private router: Router) { }

  private loggedIn = new BehaviorSubject<boolean>(false);
  private back = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get hasBack() {
    return this.back.asObservable();
  }

  login(){
    this.loggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  navigated() {
    this.back.next(true);
  }
}
