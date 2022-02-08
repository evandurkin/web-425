// Title: Exercise 6.2
// Author: Evan Durkin
// Date: February 8, 2022

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../withlist-item.interface.ts';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler( item: IWishlistItem ){
    this.items.push(item)
  }

}
