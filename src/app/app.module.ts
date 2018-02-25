import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//import services section
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service';

//routes
import {routes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
