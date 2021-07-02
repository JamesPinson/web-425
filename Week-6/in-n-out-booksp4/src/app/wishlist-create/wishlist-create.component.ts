/**
 * Title: wishlist-create.component.ts
 * Author: James Pinson
 * Date: July 1st 2021
 * Description: This is the wishlist-create component which contains the item emitter for our wishlist form.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  //This show we are outputting our item emitter.
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  //This sets our item to IWishlistItem.
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  //This is our add item function which allows us to add an item to our wishlist.
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }

}
