import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: ''}
];


export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
