import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { MedicationRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-medication-add',
  templateUrl: './medication-add.html',
  styleUrls: ['./medication-add.scss']
})
export class MedicationAddPageComponent {
 
  request: MedicationRequestModel = new MedicationRequestModel();
  patientId;



  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();
    this.patientId=this.api.patientId
    this.request.patientId=this.patientId;
  }

  save() {
    this.api.saveMedication(this.request);
    
   
  }
  
  

}
