// Title: Exercise 7.3
// Author: Evan Durkin
// Date: February 17, 2022

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  constructor( private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.3 - Form Validation';
   }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
