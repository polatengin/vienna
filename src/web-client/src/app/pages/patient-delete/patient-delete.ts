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
  isActive:false;
  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();
    
    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  delete() {
    this.api.deletePatient(this.patientId,this.isActive).subscribe(_ => {
      this.router.navigate(['/patient']);
    })

    
  }

}
