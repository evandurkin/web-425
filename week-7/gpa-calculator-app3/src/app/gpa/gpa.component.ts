// Title: Exercise 7.3
// Author: Evan Durkin
// Date: February 19, 2022

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
