import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { PatientListResponseModel } from '../../models/api-models';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.html',
  styleUrls: ['./patient-list.scss']
})
export class PatientListPageComponent {

  patients: PatientListResponseModel[];

  filterText: any;

  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Patient List');
    layout.showMenu();
    layout.hideBackButton();

    api.getPatients().subscribe(_ => this.patients = _);
  }

  gotoNewPatientPage() {
    this.router.navigate(['/patient/add']);
  }

  gotoVitalPage(patientId: number) {
    this.router.navigate(['/vital/', patientId]);
  }

  gotoDailyAssessmentPage(patientId: number) {
    this.router.navigate(['/dailyassessment/', patientId]);
  }

  gotoMedicationPage(patientId: number) {
    this.router.navigate(['/medication/', patientId]);   
  }

  gotoEditPage(patientId: number, patientName: string) {
    this.router.navigate(['/patient/edit/', patientId]);
    this.api.patientName=patientName;
  }

  gotoDeletePage(patientId: number, patientName: string){
    this.router.navigate(['/patient/delete/', patientId]);
    this.api.patientName=patientName;
  }

  getPatientName(patientName: string){
    this.api.patientName=patientName;
  }

}
