// Title: Exercise 7.3
// Author: Evan Durkin
// Date: February 19, 2022

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number> = [ 1007, 1008, 1009, 1010, 1011, 1012 ];

  constructor() { }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
