// Title: Assignment 6.4
// Author: Evan Durkin
// Date: February 9, 2022

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties'
   }

  ngOnInit(): void {
  }

}
