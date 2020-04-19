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
  patientId;



  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();
    this.patientId=this.api.patientId
    this.request.patientId=this.patientId;
  }

  save() {
    this.api.save(this.request);
    
   
  }
  
  

}
