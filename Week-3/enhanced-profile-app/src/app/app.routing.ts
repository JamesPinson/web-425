/*
============================================
; Title: app.routing.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to pass data to routes.
;===========================================
*/

//Here we have our import statements.
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";

//Here we export our AppRoutes class and create the paths for our signInComponent and HomeComponent.
export const AppRoutes: Routes= [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
