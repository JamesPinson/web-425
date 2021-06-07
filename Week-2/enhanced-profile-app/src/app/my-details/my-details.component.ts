/*
============================================
; Title:  Pinson-Exercise 2.4
; Author: James Pinson
; Date: June 6th 2021
; Description: We learn how to use data Binding in Angular.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2021", "#CodingWithAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }
}
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("James Pinson", "Ice Cream", "Blue");
  }

  ngOnInit(): void {
  }

}
