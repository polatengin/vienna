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

import { SearchFilterPipe } from './pipe/search-filter.pipe';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'patient', component: PatientListPageComponent },
  { path: 'patient/add', component: NewPatientPageComponent },
  { path: 'vital/add', component: VitalPageComponent },
  { path: 'doctor/add', component: NewDoctorPageComponent },
  { path: 'doctor',component: DoctorListPageComponent},
  { path: 'doctor/edit/:id',component: DoctorEditPageComponent},
  { path: 'patient/edit/:id',component: PatientEditPageComponent},
  { path: 'vital/:id',component: VitalListPageComponent},
  { path: 'vital/edit/:id',component: VitalEditPageComponent},
  { path: 'vital/delete/:id',component: VitalDeletePageComponent},
  { path: 'patient/delete/:id',component: PatientDeletePageComponent},
  { path: 'doctor/delete/:id',component: DoctorDeletePageComponent},
  { path: 'dailyassessment/add',component: DailyAssessmentPageComponent},
  { path: 'dailyassessment/:id',component: DailyAssessmentListPageComponent},
  { path: 'dailyassessment/edit/:id',component: DailyAssessmentEditPageComponent}
  

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
