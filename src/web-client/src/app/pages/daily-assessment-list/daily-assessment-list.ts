import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-daily-assessment-list',
  templateUrl: './daily-assessment-list.html',
  styleUrls: ['./daily-assessment-list.scss']
})
export class DailyAssessmentListPageComponent {
dailyAssessments;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Daily Assessment List');
    layout.showMenu();
    layout.showBackButton();
    api.getDailyAssessments()
    .subscribe(data => this.dailyAssessments = data);
    

    
  }

  gotoAddDailyAssessmentPage() {
    this.router.navigate(['/dailyassessment/add']);
  }

  

    

}
