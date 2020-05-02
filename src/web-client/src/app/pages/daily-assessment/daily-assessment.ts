import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { DailyAssessmentRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-daily-assessment',
  templateUrl: './daily-assessment.html',
  styleUrls: ['./daily-assessment.scss']
})
export class DailyAssessmentPageComponent {

  request: DailyAssessmentRequestModel = new DailyAssessmentRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getPatient(params["id"]).subscribe(_ => {
        this.request.patientId = _.patientId;
      });
    });
  }

  save(){
    this.api.saveDailyAssessment(this.request).subscribe(_ => {
      this.router.navigate(['/dailyassessment/', this.request.patientId]);
    });
  }

}
