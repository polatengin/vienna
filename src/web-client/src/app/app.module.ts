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
import { SearchFilterPipe } from './pipe/search-filter.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'patient-list', component: PatientListPageComponent },
  { path: 'new-patient', component: NewPatientPageComponent },
  { path: 'vital', component: VitalPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientListPageComponent,
    NewPatientPageComponent,
    VitalPageComponent,
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
