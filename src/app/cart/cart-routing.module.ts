import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CartComponent} from './components/carts/cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Cart manager'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoutingModule {
}
