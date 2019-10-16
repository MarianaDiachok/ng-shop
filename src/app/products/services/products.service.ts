import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsList = [
    {
      name: 'banana',
      price: 20,
      receivedAmount: 5,
      orderedAmount: 0,
      isAvailable: true
    },
    {
      name: 'milk',
      price: 10.50,
      receivedAmount: 1,
      orderedAmount: 0,
      isAvailable: false
    },
    {
      name: 'tomato',
      price: 25,
      receivedAmount: 2,
      orderedAmount: 0,
      isAvailable: true
    },
    {
      name: 'bread',
      price: 5.30,
      receivedAmount: 5,
      orderedAmount: 0,
      isAvailable: true
    },
    {
      name: 'water',
      price: 11.25,
      receivedAmount: 10,
      orderedAmount: 0,
      isAvailable: true
    }
      ];
  constructor() { }

  getProducts() {
    return this.productsList;
  }

}
