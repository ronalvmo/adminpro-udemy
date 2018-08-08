import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// Rutas
import { APP_ROUTES } from './app.routes';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';

// Servicios

import { ServiceModule } from './Services/service.module';





@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTES,
        PagesModule,
        FormsModule,
        ServiceModule,
        ReactiveFormsModule
        /* SharedModule, */
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
