// Title: Exercise 2.3
// Author: Evan Durkin
// Date: January 16, 2022


import { Component, OnInit } from '@angular/core';

// Person class with fields for name, Favorite food and color, and search keywords.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2022", "#CodingWithAngular", "#ngNewYork"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // Builds the new Person with strings
  toString() {
    console.log(`\n Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  // Creates a new Person with inserted strings
  constructor() {
    this.myProfile = new Person("Evan Durkin", "Pomegranates", "Blue");
    this.myProfile.toString();
  }
  ngOnInit(): void {
  }

}
