import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList = [
    {
      name: 'banana',
      price: 20,
      amount: 5,
      isAvailable: true
    },
    {
      name: 'milk',
      price: 10.50,
      amount: 1,
      isAvailable: false
    },
    {
      name: 'tomato',
      price: 25,
      amount: 2,
      isAvailable: true
    }
      ];
  constructor() { }

  getProducts() {
    return this.productsList;
  }
}
