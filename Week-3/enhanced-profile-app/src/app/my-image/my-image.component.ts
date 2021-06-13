/*
============================================
; Title: my-image.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to pass data to routes.
;===========================================
*/

//This is the import statements.
import { Component, OnInit } from '@angular/core';

//This is the component.
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

//This is where we export our MyImageComponent.
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
