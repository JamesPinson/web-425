/**
 * Title: base-layout.component.ts
 * Author: James Pinson
 * Date: 4 July 2021
 * Description: This is the base layout of our application.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //Here we assign the variable assignment as a string.
  assignment: string;

  //Here we give the assignment variable a value.
  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
   }

  ngOnInit(): void {
  }

}
