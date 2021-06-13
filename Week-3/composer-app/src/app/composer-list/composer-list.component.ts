/**
 * Title: composer-list.component.ts
 * Author: James Pinson
 * Date: June 12th 2021
 * Description: This is the Composer list component, which displays a list of composers.
 */

//This is our import statements.
 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { Composer } from '../composer.class';

//This is our component info.
 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })

 //This is where we export of ComposerListComponent.
 export class ComposerListComponent implements OnInit {

//This is where we set up our composers array.
    composers: Array<IComposer>;

//This creates our array of composers.
   constructor() {
     this.composers = new Composer().getComposers();
   }

   ngOnInit(): void {
   }

 }
