// Title: Exercise 2.3
// Author: Evan Durkin
// Date: January 16, 2022

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Paths for the navigation bar
const routes: Routes = [
  { path: "",
    component: HomeComponent
  },
  { path: "home",
    component: HomeComponent
  },
  { path: "about",
    component: AboutComponent
  },
  { path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
