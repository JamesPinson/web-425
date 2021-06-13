/*
============================================
; Title: sign-in.guards.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to use guarding routes.
;===========================================
*/

//This is our import statements.
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { typeSourceSpan } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

//Here we export our SignInGuard class.
export class SignInGuard implements CanActivate {

  constructor(private router: Router){

  }

//Here we set up our can activate function to return true if it is set to isLoggedIn and to reroute if it is false.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
