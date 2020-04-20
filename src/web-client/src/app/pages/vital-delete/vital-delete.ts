import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-vital-delete',
  templateUrl: './vital-delete.html',
  styleUrls: ['./vital-delete.scss']
})
export class VitalDeletePageComponent {

  vital;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Delete Vital');
    layout.showMenu();
    layout.showBackButton();
    this.api.getVital()
    .subscribe(data => this.vital = data);
    
  }

  delete() {
    this.api.deleteVital();
    this.router.navigate(['/vital/'+this.api.patientId]);
  }

}