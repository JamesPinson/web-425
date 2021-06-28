/**
 * Title: books.service.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the books.service ts file which contains our array of books.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //This creates our books variable which is an array.
  books: Array<IBook>;

  //This creates the data that exist within our array of books.
  constructor() {
    this.books = [
      {
        isbn: '‎0440419395',
        title: 'Hoot',
        description: 'A book for Young Readers',
        numOfPages: 292,
        authors: ['Carl Hiaasen']
      },
      {
        isbn: '‎0440421047',
        title: 'Scat',
        description: 'A book for Young Readers',
        numOfPages: 400,
        authors: ['Carl Hiaasen']
      },
      {
        isbn: '0375861254',
        title: 'Flush',
        description: 'A book for Young Readers',
        numOfPages: 288,
        authors: ['Carl Hiaasen']
      },
      {
        isbn: '0375868275',
        title: 'Chomp',
        description: 'A book for Young Readers',
        numOfPages: 290,
        authors: ['Carl Hiaasen']
      },
      {
        isbn: '0593177673',
        title: 'Squirm',
        description: 'A book for Young Readers',
        numOfPages: 304,
        authors: ['Carl Hiaasen']
      }
    ]
  }

  //This is our getBooks function that retrieves our array of books.
  getBooks(): Observable<IBook[]> {
    return of (this.books);
  }

  //This is our getBook function that returns a Book based on the ISBN.
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
