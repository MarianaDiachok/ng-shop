import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';

import { ProductsService } from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';
import {ProductArrayService} from '../../services/product-array.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;
  // purchaseList = purchaseList[];

  constructor(private prodService: ProductsService,
              private cartService: CartService,
              private productArrayService: ProductArrayService) { }

  ngOnInit() {
    this.products = this.productArrayService.getProducts();
    // this.purchaseList = this.cartService.getPurchaseList();
  }

  onBuyProduct(product) {
    // const itemIsInCart = this.purchaseList.includes(item);
    // if (!itemIsInCart) {
    //   this.purchaseList.push(item);
    //   item.orderedAmount++;
    // } else {
    //   item.orderedAmount++;
    // }
    this.productArrayService.addProduct(product);
  }

}
