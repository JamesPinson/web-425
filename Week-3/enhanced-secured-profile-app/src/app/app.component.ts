/*
============================================
; Title: app.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to use Guarding Routes.
;===========================================
*/

//Here we have our import statements.
import { Component } from '@angular/core';

//Here we have our component statements.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//This exports our assignment variable string.
export class AppComponent {

  assignment: string = 'Exercise 3.3 - Passing Data to Routes - Part 2';
}
