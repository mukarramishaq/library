import {RouterModule,Routes} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ModuleWithProviders} from '@angular/core';
const appRoutes:Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginFormComponent},
    {path:'register',component:RegisterFormComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);