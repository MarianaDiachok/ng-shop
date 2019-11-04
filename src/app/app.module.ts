import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartComponent } from './cart/components/carts/cart.component';
import {CartModule} from './cart/cart.module';
import {SharedModule} from './shared/shared.module';
import { AboutComponent } from './layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    CartModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
