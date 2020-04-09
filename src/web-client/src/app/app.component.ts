import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.fill-space { flex: 1 1 auto; }']
})
export class AppComponent {
  constructor(private layoutService: LayoutService) {
  }

  isLoggedIn$: Observable<boolean>;
  hasBack$: Observable<boolean>;
  title$: Observable<string>;

  ngOnInit() {
    this.isLoggedIn$ = this.layoutService.isLoggedIn;
    this.hasBack$ = this.layoutService.hasBack;
    this.title$ = this.layoutService.title;
  }
}
