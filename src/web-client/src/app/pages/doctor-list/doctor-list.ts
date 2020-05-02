import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Specialty } from '../../models/api-models';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.scss']
})
export class DoctorListPageComponent {
  doctors;
  copyDoctors;
  filterText:any;
  specialties;
  option = 'Tümü';

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Doctor List');
    layout.showMenu();
    layout.showBackButton();

    api.getDoctors().subscribe(_ => {
      this.doctors = _;
      this.copyDoctors = this.doctors.slice();
    });

    this.specialties = Object.values(Specialty);
  }

  gotoNewDoctorPage() {
    this.router.navigate(['/doctor/add']);
  }

  specialtyFilter(filterOption: any) {
    if (filterOption == '0') {
      this.doctors = this.copyDoctors;
    } else {
      this.doctors = this.copyDoctors.filter((item) => item.specialty === filterOption);
    }
   }

  gotoEditPage(doctorId, doctorName) {
    this.router.navigate(['/doctor/edit/', doctorId]);
    this.api.doctorName=doctorName;
  }

  gotoDeletePage(doctorId, doctorName){
    this.router.navigate(['/doctor/delete/', doctorId]);
    this.api.doctorName=doctorName;
  }

}
