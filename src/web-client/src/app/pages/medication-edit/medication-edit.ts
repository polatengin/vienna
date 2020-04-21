import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-medication-edit',
  templateUrl: './medication-edit.html',
  styleUrls: ['./medication-edit.scss']
})
export class MedicationEditPageComponent {

 medication;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Medication');
    layout.showMenu();
    layout.showBackButton();
    this.api.getMedication()
    .subscribe(data => this.medication = data);
    
    
  }

  update() {
    this.api.updateMedication(this.medication);
    this.router.navigate(['/medication/'+this.api.patientId]);
  }
  

}