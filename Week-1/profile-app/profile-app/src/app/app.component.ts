/*
============================================
; Title:  Pinson-Assignment 1.5
; Author: James Pinson
; Date: May 30th 2021
; Description: We create our first app using components with Angular.
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
  assignment: string = 'Assignment 1.5 - Components';
}
