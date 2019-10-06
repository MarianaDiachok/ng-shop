import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './products/components/product/product-component.component';
import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { CartComponent } from './cart/components/carts/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
