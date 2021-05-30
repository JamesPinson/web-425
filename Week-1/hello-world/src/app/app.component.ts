/*
============================================
; Title:  Pinson-Assignment 1.3
; Author: James Pinson
; Date: May 30th 2021
; Description: Creating our first application using Angular.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in James Pinson's World!"
}
