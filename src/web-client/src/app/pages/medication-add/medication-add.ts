import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { MedicationRequestModel } from '../../models/api-models';

@Component({
  selector: 'app-medication-add',
  templateUrl: './medication-add.html',
  styleUrls: ['./medication-add.scss']
})
export class MedicationAddPageComponent {

  request: MedicationRequestModel = new MedicationRequestModel();

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.patientName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.request.patientId = params["id"];
    });
  }

  save() {
    this.api.saveMedication(this.request).subscribe(_ => {
      this.router.navigate(['/medication/'+ this.request.patientId]);
    });
  }

}
