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
  dailyAssessment;
  
  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Delete Daily Assessment');
    layout.showMenu();
    layout.showBackButton();
   
    

    route.params.subscribe(params => {
      this.api.getDailyAssessment(params["id"]).subscribe(_ => this.dailyAssessment = _);
    });
  }

  delete() {
    this.api.deleteDailyAssessment(this.dailyAssessment._id).subscribe(_ =>{
      this.router.navigate(['/dailyassessment/', this.dailyAssessment.patientId]);
    })

    
  }

}