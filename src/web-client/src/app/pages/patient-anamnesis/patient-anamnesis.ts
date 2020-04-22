import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Complaint } from '../../models/diseases';
@Component({
  selector: 'app-patient-anamnesis',
  templateUrl: './patient-anamnesis.html',
  styleUrls: ['./patient-anamnesis.scss']
})
export class PatientAnamnesisPageComponent {
panelOpenState = false;
  
  patientId;
  complaint=Complaint;
  complaints;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Patient Anamnesis');
    layout.showMenu();
    layout.showBackButton();
    
    this.complaints=Object.values(this.complaint);
  }

  add(newComplaint: HTMLInputElement) {
   this.complaints.push(newComplaint.value);
   newComplaint.value="";
  }

}
