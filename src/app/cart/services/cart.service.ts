import { Injectable } from '@angular/core';
import {injectTemplateRef} from '@angular/core/src/render3/view_engine_compatibility';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productAmount = 0;
  cartProducts;
  totalQuantity: number;
  totalSum: number;

  private purchaseList = [];

  constructor() { }

  getPurchaseList() {
    return this.purchaseList;
  }

  getTotalPrice() {
    let sum = 0;
    this.purchaseList.forEach((item) => {
      sum += (item.price * item.orderedAmount);
    });
    return sum;
  }

  addProduct() {

  }

  removeProduct() {

  }

  increaseQuantity() {

  }

  decreaseQuantity() {

  }

  removeAllProducts() {

  }

  updateCartData() {

  }

}
