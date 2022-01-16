import { Component, OnInit, Input } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Genre: ${this.genre}`)
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Frédéric Chopin", "Classical"),
      new Composer("Ludwig Van Beethoven", "Classical"),
      new Composer("Ryuichi Sakamoto", "Electronic"),
      new Composer("Stephen Sondheim", "Vocal"),
      new Composer("Thelonious Monk", "Jazz")
    ];
   }

  ngOnInit(): void {
  }

}
