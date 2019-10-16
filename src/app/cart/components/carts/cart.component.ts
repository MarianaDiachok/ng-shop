import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  purchaseList = [];
  // amount: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.purchaseList = this.cartService.getPurchaseList();
    // this.amount = this.cartService.productAmount;
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

}
