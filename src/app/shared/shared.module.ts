import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
 
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
      ],
      exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
      ],
      imports: [
        BrowserModule,
        RouterModule,
        CommonModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class SharedModule { }
