import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.html',
  styleUrls: ['./doctor-delete.scss']
})
export class DoctorDeletePageComponent {

  doctorId: number;
  isActive=false; 
  constructor(layout: LayoutService, private api: ApiService, private router: Router, route: ActivatedRoute) {
    layout.updateTitle(this.api.doctorName);
    layout.showMenu();
    layout.showBackButton();

    route.params.subscribe(params => {
      this.doctorId = params["id"];
    });
  }

  delete() {
    this.api.deleteDoctor(this.doctorId,this.isActive).subscribe(_ => {
      this.router.navigate(['/doctor']);
    });
  }

}
