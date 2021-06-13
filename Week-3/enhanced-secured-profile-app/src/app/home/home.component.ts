/*
============================================
; Title: home.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to use Guarding Routes.
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

//Here we have the export statement for the HomeComponent class.
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
