import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-vital-edit',
  templateUrl: './vital-edit.html',
  styleUrls: ['./vital-edit.scss']
})
export class VitalEditPageComponent {

  vital;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Vital');
    layout.showMenu();
    layout.showBackButton();
    this.api.getVital()
    .subscribe(data => this.vital = data);
    
  }

  

}