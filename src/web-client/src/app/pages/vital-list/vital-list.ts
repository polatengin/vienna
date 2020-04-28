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

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Vital List');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      api.getVitals(params["id"]).subscribe(_ => this.vitals = _);
    });
  }

  gotoAddVitalPage(){
    this.router.navigate(['/vital/add']);
  }

  gotoEditPage(vitalId: number) {
    this.router.navigate(['/vital/edit/', vitalId]);
  }

  gotoDeletePage(vitalId: number){
    this.router.navigate(['/vital/delete/', vitalId]);
  }

}
