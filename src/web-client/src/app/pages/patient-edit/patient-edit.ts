import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { NewPatientRequestModel } from '../../models/api-models';



@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.html',
  styleUrls: ['./patient-edit.scss']
})
export class PatientEditPageComponent {

    request: NewPatientRequestModel = new NewPatientRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Patient');
    layout.showMenu();
    layout.showBackButton();
  }

  update() {
    this.api.updatePatient(this.request);
    this.router.navigate(['/patient']);
  }

}
