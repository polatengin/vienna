import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-daily-assessment-delete',
  templateUrl: './daily-assessment-delete.html',
  styleUrls: ['./daily-assessment-delete.scss']
})
export class DailyAssessmentDeletePageComponent {

  patientId: number;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Delete Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
   
    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  delete() {
    this.api.deleteDailyAssessment(0);

    this.router.navigate(['/dailyassessment/', this.patientId]);
  }

}