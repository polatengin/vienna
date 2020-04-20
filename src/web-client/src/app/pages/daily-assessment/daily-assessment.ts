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

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
  }

  

}


