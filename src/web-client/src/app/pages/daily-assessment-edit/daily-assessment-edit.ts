import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-daily-assessment-edit',
  templateUrl: './daily-assessment-edit.html',
  styleUrls: ['./daily-assessment-edit.scss']
})
export class DailyAssessmentEditPageComponent {

 dailyAssessment;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
    this.api.getDailyAssessment()
    .subscribe(data => this.dailyAssessment = data);
    
    
  }

  

}