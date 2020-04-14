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
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Patient List');
    layout.showMenu();
    layout.hideBackButton();
    api.getPatients()
    .subscribe(data => this.patients = data);
    
  }

  gotoNewPatientPage() {
    this.router.navigate(['/new-patient']);
  }

  

}
