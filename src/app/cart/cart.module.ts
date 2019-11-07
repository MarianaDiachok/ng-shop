import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module'

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/carts/cart.component';

@NgModule({
  declarations: [CartItemComponent, CartComponent],
  exports: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
