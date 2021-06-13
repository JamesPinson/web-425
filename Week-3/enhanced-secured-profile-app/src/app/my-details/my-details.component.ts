/*
============================================
; Title: my-details.component.ts
; Author: James Pinson
; Date: June 12th 2021
; Description: We learn how to use Guarding Routes.
;===========================================
*/

//This is our import statements.
import { Component, OnInit } from '@angular/core';

//This is where we export our person class with the variables fullName, favoriteFood, favoriteColor, and keywords.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", " #2021", " #CodingWithAngular", " #ngOmaha"
  ];

//This is our constructor which sets up our Person.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }
}

//This is the components.
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

//This is where we export the my details component which contains our person class with our variables.
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("James Pinson", "Ice Cream", "Blue");
  }

  ngOnInit(): void {
  }

}
