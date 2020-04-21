import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-medication-delete',
  templateUrl: './medication-delete.html',
  styleUrls: ['./medication-delete.scss']
})
export class MedicationDeletePageComponent {

  

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Delete Medication');
    layout.showMenu();
    layout.showBackButton();
    
    
  }

  delete() {
    this.api.deleteMedication();
    this.router.navigate(['/medication/'+this.api.patientId]);
  }

}