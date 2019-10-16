import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];
  purchaseList = [];

  constructor(private prodService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.prodService.getProducts();
    this.purchaseList = this.cartService.getPurchaseList();
  }

  onBuy(item) {
    const itemIsInCart = this.purchaseList.includes(item);
    if (!itemIsInCart) {
      this.purchaseList.push(item);
      item.orderedAmount++;
    } else {
      item.orderedAmount++;
    }
  }

}
