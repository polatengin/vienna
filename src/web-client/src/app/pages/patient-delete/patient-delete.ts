import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.html',
  styleUrls: ['./patient-delete.scss']
})
export class PatientDeletePageComponent {

  patientId: number;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Delete Patient');
    layout.showMenu();
    layout.showBackButton();
    
    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  delete() {
    this.api.deletePatient(this.patientId).subscribe(_ => {
      this.router.navigate(['/patient']);
    })

    
  }

}
