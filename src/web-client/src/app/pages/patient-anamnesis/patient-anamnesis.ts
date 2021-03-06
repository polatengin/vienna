import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LayoutService } from '../../services/layout.service';

import { Complaint,ChronicDisease,Operation, FamilyMember } from '../../models/diseases';
@Component({
  selector: 'app-patient-anamnesis',
  templateUrl: './patient-anamnesis.html',
  styleUrls: ['./patient-anamnesis.scss']
})
export class PatientAnamnesisPageComponent {
panelOpenState = false;
  
  patientId;
  complaint=Complaint;
  complaints;
  chronicDisease=ChronicDisease;
  chronicDiseases;
  operation=Operation;
  operations;
  familyMember=FamilyMember;
  familyMembers;
  constructor(layout: LayoutService, private api: ApiService, private router: Router) {
    layout.updateTitle('Patient Anamnesis');
    layout.showMenu();
    layout.showBackButton();
    
    this.complaints=Object.values(this.complaint);
    this.chronicDiseases=Object.values(this.chronicDisease);
    this.operations=Object.values(this.operation);
    this.familyMembers=Object.values(this.familyMember);
  }

  add(newComplaint: HTMLInputElement) {
   this.complaints.push(newComplaint.value);
   newComplaint.value="";
  }

  addChronicDisease(newChronicDisease: HTMLInputElement) {
    this.chronicDiseases.push(newChronicDisease.value);
    newChronicDisease.value="";
   }

   addOperation(newOperation: HTMLInputElement) {
    this.operations.push(newOperation.value);
    newOperation.value="";
   }

   addFamilyMember(newFamilyMember: HTMLInputElement) {
    this.familyMembers.push(newFamilyMember.value);
    newFamilyMember.value="";
   }

   show(){
    document.getElementById('frequency').style.display='inline';
  }

}
