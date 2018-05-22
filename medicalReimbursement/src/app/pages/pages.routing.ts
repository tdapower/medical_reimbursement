import { Routes } from '@angular/router';


import { MainDashboardComponent } from './dashboards/main-dashboard/main-dashboard.component';


import { PasswordChangeComponent } from './user/password-change/password-change.component';




export const PAGE_ROUTES: Routes = [
   
    {
        path: 'mainDashboard',
        component: MainDashboardComponent
    },


    {
        path: 'passwordChange',
        component: PasswordChangeComponent
    }



];





