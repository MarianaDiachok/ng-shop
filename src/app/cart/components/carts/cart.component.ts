import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  purchaseList = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.purchaseList = this.cartService.getPurchaseList();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  onEdit(item) {

  }

  onRemove(purchase) {
    this.purchaseList = this.purchaseList.filter((item) => {
      return purchase !== item;
    });
  }

  onAdd(product) {

  }
}
