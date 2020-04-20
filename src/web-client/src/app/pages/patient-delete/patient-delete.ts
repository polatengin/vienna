import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.html',
  styleUrls: ['./patient-delete.scss']
})
export class PatientDeletePageComponent {

  

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Delete Patient');
    layout.showMenu();
    layout.showBackButton();
    
    
  }

  delete() {
    this.api.deletePatient();
    this.router.navigate(['/patient']);
  }

}