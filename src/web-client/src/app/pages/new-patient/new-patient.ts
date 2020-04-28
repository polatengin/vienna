import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { NewPatientRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.html',
  styleUrls: ['./new-patient.scss']
})
export class NewPatientPageComponent {

  request: NewPatientRequestModel = new NewPatientRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('New Patient');
    layout.showMenu();
    layout.showBackButton();
  }

  save() {
    this.api.savePatient(this.request);
    this.router.navigate(['/patient']);
  }

}
