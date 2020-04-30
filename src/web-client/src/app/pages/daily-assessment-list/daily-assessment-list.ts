import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-daily-assessment-list',
  templateUrl: './daily-assessment-list.html',
  styleUrls: ['./daily-assessment-list.scss']
})
export class DailyAssessmentListPageComponent {

  model;
  patientId: number;
  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Daily Assessment List');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      api.getDailyAssessments(params["id"]).subscribe(data => this.model = data);
    });

    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  gotoAddDailyAssessmentPage() {
    this.router.navigate(['/dailyassessment/add/', this.patientId]);
  }

  gotoEditPage(dailyAssessmentId: number) {
    this.router.navigate(['/dailyassessment/edit/', dailyAssessmentId]);
  }

  gotoDeletePage(dailyAssessmentId: number) {
    this.router.navigate(['/dailyassessment/delete/', dailyAssessmentId]);
  }

}
