import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CartComponent} from './cart/components/carts/cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Cart' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
