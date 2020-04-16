import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Doctor, Specialty } from '../../models/doctor';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.html',
  styleUrls: ['./new-doctor.scss']
})
export class NewDoctorPageComponent {

  request: Doctor = new Doctor();
  specialty=Specialty;
  specialties;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Doctor');
    layout.showMenu();
    layout.showBackButton();
    this.specialties=Object.values(this.specialty);

  }

  save() {
    this.api.saveDoctor(this.request);
  }

}