import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Doctor, Specialty } from '../../models/doctor';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.html',
  styleUrls: ['./doctor-edit.scss']
})
export class DoctorEditPageComponent {

  request: Doctor = new Doctor();
  specialty=Specialty;
  specialties;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Doctor');
    layout.showMenu();
    layout.showBackButton();
    this.specialties=Object.values(this.specialty);

  }

  

}