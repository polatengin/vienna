import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { VitalRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.html',
  styleUrls: ['./vital.scss']
})
export class VitalPageComponent {

  request: VitalRequestModel = new VitalRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Vital');
    layout.showMenu();
    layout.showBackButton();
  }

  save() {
    this.api.save(this.request);
    
   
  }

}
