import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  purchaseList = []; // может сделать приватным?

  constructor() { }

  getpurchaseList() {
    return this.purchaseList;
  }
}
