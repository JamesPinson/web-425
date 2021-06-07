/*
============================================
; Title:  Pinson-Exercise 2.4
; Author: James Pinson
; Date: June 6th 2021
; Description: We learn how to use data Binding in Angular.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//This exports our assignment variable string.
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding.';
}
