import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  patientId;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
    this.patientId=this.api.patientId
    this.request.patientId=this.patientId;
  }

  save(){
      this.api.saveDailyAssessment(this.request);
      this.router.navigate(['/dailyassessment/'+this.api.patientId]);
  }

}


