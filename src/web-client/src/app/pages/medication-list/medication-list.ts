import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.html',
  styleUrls: ['./medication-list.scss']
})
export class MedicationListPageComponent {

  medications;
  patientId: number;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getMedications(params["id"]).subscribe(_ => this.medications = _);
    });

    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  gotoAddMedicationPage() {
    this.router.navigate(['/medication/add/',this.patientId]);
  }

  gotoEditPage(medicationId: number) {
    this.router.navigate(['/medication/edit/', medicationId]);
  }

  gotoDeletePage(medicationId: number){
    this.router.navigate(['/medication/delete/', medicationId]);
  }

}
