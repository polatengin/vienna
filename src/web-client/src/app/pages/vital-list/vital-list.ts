import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-vital-list',
  templateUrl: './vital-list.html',
  styleUrls: ['./vital-list.scss']
})
export class VitalListPageComponent {

  vitals;
  patientId;
  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Vital List');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      api.getVitals(params["id"]).subscribe(_ => this.vitals = _);
    });

    route.params.subscribe(params => {
      this.patientId = params["id"];
    });
  }

  gotoAddVitalPage(){
    this.router.navigate(['/vital/add',this.patientId]);
  }

  gotoEditPage(vitalId: number) {
    this.router.navigate(['/vital/edit/', vitalId]);
  }

  gotoDeletePage(vitalId: number){
    this.router.navigate(['/vital/delete/', vitalId]);
  }

}
