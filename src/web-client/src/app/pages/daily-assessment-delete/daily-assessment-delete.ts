import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-daily-assessment-delete',
  templateUrl: './daily-assessment-delete.html',
  styleUrls: ['./daily-assessment-delete.scss']
})
export class DailyAssessmentDeletePageComponent {

  

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Delete Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
   
    
  }

  delete() {
    this.api.deleteDailyAssessment();
    this.router.navigate(['/dailyassessment/'+this.api.patientId]);
  }

}