import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-medication-edit',
  templateUrl: './medication-edit.html',
  styleUrls: ['./medication-edit.scss']
})
export class MedicationEditPageComponent {

  medication;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Edit Medication');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getMedication(params["id"]).subscribe(_ => this.medication = _);
    });
    
  }

  update() {
    this.api.updateMedication(this.medication).subscribe(_ =>{
      this.router.navigate(['/medication/', this.medication.patientId]);
    })
    
  }

}