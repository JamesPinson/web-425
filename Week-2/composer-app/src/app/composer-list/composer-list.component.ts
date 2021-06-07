/**
 * Title: composer-list.component.ts
 * Author: James Pinson
 * Date: June 6th 2021
 * Description: Composer list component; displays a list of composers
 */

 import { Component, OnInit } from '@angular/core';

 //This sets up our composer class.
 export default class Composer {
   fullName: string;
   genre: string;

   constructor(fullName: string, genre: string) {
     this.fullName = fullName;
     this.genre = genre;
   }
 }

 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {

   composers: Array<Composer>;

  //This creates our array of composers.
   constructor() {
     this.composers = [
       new Composer("Ludwig van Beethoven", "Classical"),
       new Composer("Johann Sebastian Bach", "Classical"),
       new Composer("Claude Debussy", "Classical"),
       new Composer("Antonio Vivaldi", "Classical"),
       new Composer("Joseph Haydn", "Classical")
     ]
   }

   ngOnInit(): void {
   }

 }
