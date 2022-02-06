// Title: Assignment 5.4
// Author: Evan Durkin
// Date: February 5, 2022


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
    this.assignment = "Assignment 5.4 - Dialogs"
  }
}
