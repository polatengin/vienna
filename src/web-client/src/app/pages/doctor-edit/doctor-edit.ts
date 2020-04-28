import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Specialty } from '../../models/api-models';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.html',
  styleUrls: ['./doctor-edit.scss']
})
export class DoctorEditPageComponent {

  specialties;
  doctor;

  constructor(layout: LayoutService, private api: ApiService, private route: ActivatedRoute) {
    layout.updateTitle('Edit Doctor');
    layout.showMenu();
    layout.showBackButton();

    this.specialties = Object.values(Specialty);

    route.params.subscribe(params => {
      this.api.getDoctor(params["id"]).subscribe(_ => this.doctor = _);
    });
  }

  update() {
    this.api.updateDoctor(this.doctor);
  }

}