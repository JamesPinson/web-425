/*
============================================
; Title: signin.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to use Guarding Routes.
;===========================================
*/

//Here we have our import statements.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Here we have our components.
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

//Here we export our SigninComponent class.
export class SigninComponent implements OnInit {

//Here we set our isLoggedIn variable to false.
  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//This creates our sign in function so when they click on the submit button it changes the isLoggedIn variable to true.
  signin() {
    this.isLoggedIn = true;

    this.router.navigate(["/home"],{queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
