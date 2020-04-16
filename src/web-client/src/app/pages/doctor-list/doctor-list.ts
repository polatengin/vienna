import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';
import { Specialty } from '../../models/doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.scss']
})
export class DoctorListPageComponent {
doctors;
copyDoctors;
filterText:any;
specialty=Specialty;
specialties;
option = 'Tümü';

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Doctor List');
    layout.showMenu();
    layout.showBackButton();
    api.getDoctors()
    .subscribe(data =>{
        this.doctors = data;
        this.copyDoctors=this.doctors.slice();
    });

    this.specialties=Object.values(this.specialty);

    
  }

  gotoNewDoctorPage() {
    this.router.navigate(['/new-doctor']);
  }

  specialtyFilter(filterOption: any) {
    if (filterOption == '0') {
     this.doctors = this.copyDoctors;
    } else {
     this.doctors = this.copyDoctors.filter((item) => item.specialty === filterOption);
    }
   }

    
    

  

}
