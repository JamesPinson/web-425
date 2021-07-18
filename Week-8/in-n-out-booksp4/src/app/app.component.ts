/**
 * Title: app.component.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the app component ts file which contains our header.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Here we export our App Component which contains our header for the application.
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }

}
