/**
 * Title: wishlist.component.ts
 * Author: James Pinson
 * Date: July 1st 2021
 * Description: This is the wishlist component ts file which contains our items array.
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  //This creates the array of IWishlist Items.
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //This is our itemshandler which pushes our IWishlistItems into our array.
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
