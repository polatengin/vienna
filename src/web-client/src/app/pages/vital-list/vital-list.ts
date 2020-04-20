import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-vital-list',
  templateUrl: './vital-list.html',
  styleUrls: ['./vital-list.scss']
})
export class VitalListPageComponent {
vitals;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Vital List');
    layout.showMenu();
    layout.showBackButton();
    api.getVitals()
    .subscribe(data => this.vitals = data);

    
  }

  gotoAddVitalPage(){
    this.router.navigate(['/vital/add']);
  }

  getVitalId(obj) {
    this.api.vitalId = obj.getAttribute('id');
    this.router.navigate(['/vital/edit/'+this.api.vitalId]);
    }

    getVitalId2(obj){
      this.api.vitalId = obj.getAttribute('id');
      this.router.navigate(['/vital/delete/'+this.api.vitalId]);
    }

    

}
