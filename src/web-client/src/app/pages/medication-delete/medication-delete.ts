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

  patientId: number;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Delete Medication');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  delete() {
    this.api.deleteMedication(this.patientId).subscribe(_ => {
      this.router.navigate(['/medication/', this.patientId]);
    });
  }

}
