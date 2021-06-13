/**
 * Title: app.component.ts
 * Author: James Pinson
 * Date: June 6th 2021
 * Description: contains our header.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
