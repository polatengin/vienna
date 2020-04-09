import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
  constructor(private router: Router) { }

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  private _hasBack = new BehaviorSubject<boolean>(false);
  private _title = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  get hasBack() {
    return this._hasBack.asObservable();
  }

  get title() {
    return this._title.asObservable();
  }

  showMenu() {
    this._isLoggedIn.next(true);
  }

  hideMenu() {
    this._isLoggedIn.next(false);
  }

  showBackButton() {
    this._hasBack.next(true);
  }

  hideBackButton() {
    this._hasBack.next(false);
  }

  updateTitle(title: string) {
    this._title.next(title);
  }
}
