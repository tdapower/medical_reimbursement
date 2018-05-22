import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { USER } from './shared/config/user';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {




        if (localStorage.getItem('currentMRPUser')) {
            // logged in so return true


            USER.USER_AUTH_TOKEN = localStorage.getItem("currentMRPUserToken");
            return true;
        }
       

        // not logged in so redirect to login page
        this.router.navigate(['login']);
        return false;
    }
}