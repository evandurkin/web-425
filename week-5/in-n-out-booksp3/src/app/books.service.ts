import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: "9780143122333",
        title: "Frankenstein",
        description: "A monster is created by a young student named Victor Frankenstein.",
        numOfPages: 384,
        authors: ["Marry Shelley"]
      },
      {
        isbn: "9780500480656",
        title: "Silk: Fiber, Fabric, Fashion",
        description: "A survey of the history of silk production and uses.",
        numOfPages: 504,
        authors: ["Lesley Ellis Miller"]
      },
      {
        isbn: "9781476733524",
        title: "The Gene: An Intimate History",
        description: "A history of the evolution of the study on genomes.",
        numOfPages: 608,
        authors: ["Siddhartha Mukherjee"]
      },
      {
        isbn: "9780140053203",
        title: "Travels with Charley",
        description: "Steinbeck travels the U.S. with his French poodle, Charley.",
        numOfPages: 288,
        authors: ["John Steinbeck"]
      },
      {
        isbn: "9780140053203",
        title: "Travels with Charley",
        description: "Steinbeck travels the U.S. with his French poodle, Charley.",
        numOfPages: 288,
        authors: ["John Steinbeck"]
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of (this.books);
 }

  getBook(isbn: string): IBook {
   for (let book of this.books) {
    if (book.isbn === isbn) {
      return book;
    }
   }
   return {} as IBook;
 }
}
