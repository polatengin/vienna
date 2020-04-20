import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';




@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.html',
  styleUrls: ['./doctor-delete.scss']
})
export class DoctorDeletePageComponent {

  

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Delete Doctor');
    layout.showMenu();
    layout.showBackButton();
    
    
  }

  

}