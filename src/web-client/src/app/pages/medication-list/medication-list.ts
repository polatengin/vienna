import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.html',
  styleUrls: ['./medication-list.scss']
})
export class MedicationListPageComponent {
medications;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Medication List');
    layout.showMenu();
    layout.showBackButton();
    api.getMedications()
    .subscribe(data => this.medications = data);
    

    
  }

  gotoAddMedicationPage() {
    this.router.navigate(['/medication/add']);
  }

  gotoEditPage(obj) {
    this.api.medicationId = obj.getAttribute('id');
    this.router.navigate(['/medication/edit/'+this.api.medicationId]);
    }

    gotoDeletePage(obj){
      this.api.medicationId = obj.getAttribute('id');
      this.router.navigate(['/medication/delete/'+this.api.medicationId]);
    }

}
