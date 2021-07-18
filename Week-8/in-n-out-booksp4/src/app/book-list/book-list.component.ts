/**
 * Title: book-list.component.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the book-list component ts file.
 */

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            })
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  //Here we created the show book details for when we click on the isbn.
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") {
        this.book = null;
      }
    });
  }

}
