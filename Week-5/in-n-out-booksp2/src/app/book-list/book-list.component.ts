/**
 * Title: book-list.component.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the book-list component ts file.
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books= this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
