/**
 * Title: home.component.ts
 * Author: James Pinson
 * Date: 4 July 2021
 * Description: This is our home component ts file for our home page.
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Here we add the function for transcript entry to appear in an array of entries. As well as selectable grads and gpa Total.
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;;

  constructor() {
    this.transcriptEntry= {} as ITranscript;
   }

  ngOnInit(): void {
  }

  //Here we add our save entry function which saves our grade into our ITranscript array.
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  //Here we create our calculate GPA function which takes our grades from our transcripts and calculates the gpa based on given values.
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade){
        case 'A':
          console.log('its an a')
          gpa += 4.00;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += .70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    //Here we display our gpa which is calculated by the total gpa divided by number of entries.
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  //Here we have the clear entries function which clears our transcript array and resets our gpa to 0.
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
