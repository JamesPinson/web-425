/**
 * Title: composer.class.ts
 * Author: James Pinson
 * Date: June 12th 2021
 * Description: This is our composer class list.
 **/

//This is our import statements.
import { IComposer } from './composer.interface';

//This sets up our composer class.
export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Claude Debussy", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Antonio Vivaldi", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      },
    ]
  }

//This returns our list of composers.
  getComposers(){
    return this.composers;
  }

//This will return the composer based on the composerId.
  getComposer(composerId: number): IComposer{
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
