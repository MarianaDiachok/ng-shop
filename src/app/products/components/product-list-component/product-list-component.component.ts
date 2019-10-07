import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';

// Поправить названия файлов, убрать из названия -componnt
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: ProductModel[];

  constructor(private prodService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.prodService.productsList;
  }

  onBuy(item) {
    this.cartService.purchaseList.push(item); // желательно организовать метод и скрыть форму хранения, тоесть свойство purchaseList сделать приватным.
  }

}
