import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-daily-assessment-edit',
  templateUrl: './daily-assessment-edit.html',
  styleUrls: ['./daily-assessment-edit.scss']
})
export class DailyAssessmentEditPageComponent {

  dailyAssessment;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getDailyAssessment(params["id"]).subscribe(_ => this.dailyAssessment = _);
    });
  }

  update() {
    this.api.updateDailyAssessment(this.dailyAssessment).subscribe(_ => {
      this.router.navigate(['/dailyassessment/', this.dailyAssessment.patientId]);
    });
  }

}
