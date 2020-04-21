import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.html',
  styleUrls: ['./patient-list.scss']
})
export class PatientListPageComponent {
patients;
filterText:any;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Patient List');
    layout.showMenu();
    layout.hideBackButton();
    api.getPatients()
    .subscribe(data => this.patients = data);

    
  }

  gotoNewPatientPage() {
    this.router.navigate(['/patient/add']);
  }

  gotoVitalPage() {
    this.router.navigate(['/vital/'+this.api.patientId]);
  }

  gotoDailyAssessmentPage() {
    this.router.navigate(['/dailyassessment/'+this.api.patientId]);
  }

  gotoMedicationPage() {
    this.router.navigate(['/medication/add']);
  }

  getName(obj) {
    this.api.patientName = obj.getAttribute('id');
    }

  getPatientId(obj) {
    this.api.patientId = obj.getAttribute('id');
    this.router.navigate(['/patient/edit/'+this.api.patientId]);
    }

    
    getPatientId2(obj){
      this.api.patientId = obj.getAttribute('id');
    }

    getPatientId3(obj){
      this.api.patientId = obj.getAttribute('id');
      this.router.navigate(['/patient/delete/'+this.api.patientId]);
    }

  

}
