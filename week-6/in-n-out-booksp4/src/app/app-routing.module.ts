// Title: Exercise 6.2
// Author: Evan Durkin
// Date: February 8, 2022

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// paths for main page, contact, and about pages
const routes: Routes = [
  {
    path: " ", component: BookListComponent
  },
  {
    path: "book-list", component: BookListComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "wishlist", component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
