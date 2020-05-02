import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-medication-delete',
  templateUrl: './medication-delete.html',
  styleUrls: ['./medication-delete.scss']
})
export class MedicationDeletePageComponent {

  
  medication;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getMedication(params["id"]).subscribe(_ => this.medication = _);
    });
  }

  delete() {
    this.api.deleteMedication(this.medication._id).subscribe(_ => {
      this.router.navigate(['/medication/', this.medication.patientId]);
    });
  }

}
