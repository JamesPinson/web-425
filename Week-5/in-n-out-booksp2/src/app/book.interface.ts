/**
 * Title: book.interface.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the book interface ts file which contains our Ibook Array.
 */

//This exports our IBook Interface.
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
