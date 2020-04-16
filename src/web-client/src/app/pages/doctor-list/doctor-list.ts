import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.scss']
})
export class DoctorListPageComponent {
doctors;
filterText:any;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Doctor List');
    layout.showMenu();
    layout.showBackButton();
    api.getDoctors()
    .subscribe(data => this.doctors = data);

    
  }

  

  

    
    

  

}
