/*
============================================
; Title:  Pinson-Assignment 1.3
; Author: James Pinson
; Date: May 30th 2021
; Description: Creating our first application using Angular.
;===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
