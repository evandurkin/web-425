// Title: Exercise 6.2
// Author: Evan Durkin
// Date: February 8, 2022


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // string variable to hold assignment name
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1"
  }
}
