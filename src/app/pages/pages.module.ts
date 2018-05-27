import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { PAGES_ROUTES } from './pages.routes';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent
    ],
    imports: [
      BrowserModule,
      PAGES_ROUTES,
      SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class PagesModule { }
