import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ThemeModule } from './theme.module';

import { LayoutService } from './services/layout.service';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/login/login';
import { PatientListPageComponent } from './pages/patient-list/patient-list';
import { NewPatientPageComponent } from './pages/new-patient/new-patient';
import { VitalPageComponent } from './pages/vital/vital';
import { NewDoctorPageComponent } from './pages/new-doctor/new-doctor';
import { DoctorListPageComponent } from './pages/doctor-list/doctor-list';
import { DoctorEditPageComponent } from './pages/doctor-edit/doctor-edit';
import { PatientEditPageComponent } from './pages/patient-edit/patient-edit';
import { VitalListPageComponent } from './pages/vital-list/vital-list';
import { VitalEditPageComponent } from './pages/vital-edit/vital-edit';
import { VitalDeletePageComponent } from './pages/vital-delete/vital-delete';
import { PatientDeletePageComponent } from './pages/patient-delete/patient-delete';
import { DoctorDeletePageComponent } from './pages/doctor-delete/doctor-delete';
import { DailyAssessmentPageComponent } from './pages/daily-assessment/daily-assessment';
import { DailyAssessmentListPageComponent } from './pages/daily-assessment-list/daily-assessment-list';
import { DailyAssessmentEditPageComponent } from './pages/daily-assessment-edit/daily-assessment-edit';
import { DailyAssessmentDeletePageComponent } from './pages/daily-assessment-delete/daily-assessment-delete';
import { MedicationAddPageComponent } from './pages/medication-add/medication-add';
import { MedicationListPageComponent } from './pages/medication-list/medication-list';
import { MedicationEditPageComponent } from './pages/medication-edit/medication-edit';
import { MedicationDeletePageComponent } from './pages/medication-delete/medication-delete';
import { PatientAnamnesisPageComponent } from './pages/patient-anamnesis/patient-anamnesis';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'patient', component: PatientListPageComponent, canActivate: [AuthGuard]  },
  { path: 'patient/add', component: NewPatientPageComponent, canActivate: [AuthGuard]  },
  { path: 'vital/add/:id', component: VitalPageComponent, canActivate: [AuthGuard]  },
  { path: 'doctor/add', component: NewDoctorPageComponent, canActivate: [AuthGuard]  },
  { path: 'doctor',component: DoctorListPageComponent, canActivate: [AuthGuard]},
  { path: 'doctor/edit/:id',component: DoctorEditPageComponent, canActivate: [AuthGuard]},
  { path: 'patient/edit/:id',component: PatientEditPageComponent, canActivate: [AuthGuard]},
  { path: 'vital/:id',component: VitalListPageComponent, canActivate: [AuthGuard]},
  { path: 'vital/edit/:id',component: VitalEditPageComponent, canActivate: [AuthGuard]},
  { path: 'vital/delete/:id',component: VitalDeletePageComponent, canActivate: [AuthGuard]},
  { path: 'patient/delete/:id',component: PatientDeletePageComponent, canActivate: [AuthGuard]},
  { path: 'doctor/delete/:id',component: DoctorDeletePageComponent, canActivate: [AuthGuard]},
  { path: 'dailyassessment/add/:id',component: DailyAssessmentPageComponent, canActivate: [AuthGuard]},
  { path: 'dailyassessment/:id',component: DailyAssessmentListPageComponent, canActivate: [AuthGuard]},
  { path: 'dailyassessment/edit/:id',component: DailyAssessmentEditPageComponent, canActivate: [AuthGuard]},
  { path: 'dailyassessment/delete/:id',component: DailyAssessmentDeletePageComponent, canActivate: [AuthGuard]},
  { path: 'medication/add/:id',component: MedicationAddPageComponent, canActivate: [AuthGuard]},
  { path: 'medication/:id',component: MedicationListPageComponent, canActivate: [AuthGuard]},
  { path: 'medication/edit/:id',component: MedicationEditPageComponent, canActivate: [AuthGuard]},
  { path: 'medication/delete/:id',component: MedicationDeletePageComponent, canActivate: [AuthGuard]},
  { path: 'patientanamnesis/add',component: PatientAnamnesisPageComponent, canActivate: [AuthGuard]}
  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientListPageComponent,
    NewPatientPageComponent,
    VitalPageComponent,
    NewDoctorPageComponent,
    DoctorListPageComponent,
    DoctorEditPageComponent,
    PatientEditPageComponent,
    VitalListPageComponent,
    VitalEditPageComponent,
    VitalDeletePageComponent,
    PatientDeletePageComponent,
    DoctorDeletePageComponent,
    DailyAssessmentPageComponent,
    DailyAssessmentListPageComponent,
    DailyAssessmentEditPageComponent,
    DailyAssessmentDeletePageComponent,
    MedicationAddPageComponent,
    MedicationListPageComponent,
    MedicationEditPageComponent,
    MedicationDeletePageComponent,
    PatientAnamnesisPageComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ThemeModule
  ],
  providers: [LayoutService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
