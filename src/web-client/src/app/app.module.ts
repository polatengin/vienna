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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'patient-list', component: PatientListPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientListPageComponent
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
