import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Specialty } from '../../models/doctor';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.html',
  styleUrls: ['./doctor-edit.scss']
})
export class DoctorEditPageComponent {

  
  specialty=Specialty;
  specialties;
  doctor;
  

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Edit Doctor');
    layout.showMenu();
    layout.showBackButton();
    this.specialties=Object.values(this.specialty);
    this.api.getDoctor()
    .subscribe(data => this.doctor = data);

  }

  update() {
    this.api.updateDoctor(this.doctor);
  }

}