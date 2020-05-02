import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-vital-delete',
  templateUrl: './vital-delete.html',
  styleUrls: ['./vital-delete.scss']
})
export class VitalDeletePageComponent {

  vital;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getVital(params["id"]).subscribe(data => this.vital = data);
    });
  }

  delete() {
    this.api.deleteVital(this.vital._id).subscribe(_ =>{
      this.router.navigate(['/vital/', this.vital.patientId]);
    })

    
  }

}
