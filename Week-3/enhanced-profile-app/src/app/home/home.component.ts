/*
============================================
; Title: home.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to pass data to routes.
;===========================================
*/

//Here we have our import statements.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Here we have our component statement.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//Here we have the export statement and assign the Boolean to our isLoggedIn variable.
export class HomeComponent implements OnInit {
  isLoggedIn: Boolean;

//Here we set our constructor to a private route and pass through our isLogged in variable.
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
