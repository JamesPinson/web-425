/**
 * Title: books.service.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the books.service ts file which contains our array of books.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //This creates our books variable which is an array.
  isbns: Array<string> = [
    '9780440419396',
    '0375841857',
    '0375834877',
    '9780375868276',
    '0307930599',
    '0385753004'
  ];

  //This creates the data that exist within our array of books.
  constructor(private http: HttpClient) { }

  //This is our getBooks function that retrieves our array of books.
  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', { params: params })
  }
}
