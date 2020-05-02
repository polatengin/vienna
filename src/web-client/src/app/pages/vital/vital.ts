import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { VitalRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.html',
  styleUrls: ['./vital.scss']
})
export class VitalPageComponent {
 
  request: VitalRequestModel = new VitalRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getPatient(params["id"]).subscribe(_ => {
        this.request.patientId=_.patientId;
      });
    });

    route.params.subscribe(params => {
      this.request.patientId = params["id"];
    });
  }

  save() {
    this.api.save(this.request).subscribe(_ =>{
      this.router.navigate(['/vital/'+this.request.patientId]);
    })
  }

}
