import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-vital-edit',
  templateUrl: './vital-edit.html',
  styleUrls: ['./vital-edit.scss']
})
export class VitalEditPageComponent {

  vital;

  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle('Edit Vital');
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.api.getVital(params["id"]).subscribe(_ => this.vital = _);
    });
  }

  update() {
    this.api.updateVital(this.vital).subscribe(_ => {
      this.router.navigate(['/vital/', this.vital.patientId]);
    });
  }

}
