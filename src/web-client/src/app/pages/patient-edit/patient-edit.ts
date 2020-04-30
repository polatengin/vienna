import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { EditPatientRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.html',
  styleUrls: ['./patient-edit.scss']
})
export class PatientEditPageComponent {

  patient: EditPatientRequestModel;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Edit Patient');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getPatient(params["id"]).subscribe(_ => this.patient = _);
    });
  }

  update() {
    this.api.updatePatient(this.patient).subscribe(_ =>{
      this.router.navigate(['/patient']);
    });
    
  }

  
}
