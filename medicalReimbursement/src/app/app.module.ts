import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'toastr-ng2';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgUploaderModule } from 'ngx-uploader';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from "ng2-modal";
// import { Md2DatepickerModule } from 'md2-datepicker';

import { routes } from './app.router';
import { MainDashboardService } from './shared/services/main-dashboard/main-dashboard.service';
import { UserAdminService } from './shared/services/userAdmin/user-admin.service';

;
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { LayoutComponent } from './layout/layout/layout.component';

import { AuthenticationService } from './shared/services/user/authentication.service';
import { AuthGuard } from '../app/authGuard';
import { SpinnerLargeComponent } from './layout/spinner-large/spinner-large.component';
import { SpinnerTopComponent } from './layout/spinner-top/spinner-top.component';

import { MainDashboardComponent } from './pages/dashboards/main-dashboard/main-dashboard.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { ChartsModule } from 'ng2-charts';
import { PasswordChangeComponent } from './pages/user/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    LayoutComponent,
    SpinnerLargeComponent,
    SpinnerTopComponent,
    MainDashboardComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NKDatetimeModule,
    Ng2PaginationModule,
    ModalModule,
    MomentModule,
    ToastrModule.forRoot(),
    NgUploaderModule,
    Angular2FontawesomeModule ,
    ChartsModule
    
  ],
  providers: [
    QuotationService,
    AuthenticationService,
    AuthGuard,
    MainDashboardService,
    UserAdminService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
