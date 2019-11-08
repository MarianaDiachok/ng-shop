import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsServicesModule } from './products-services.module';

import { ProductListComponent, ProductComponent } from './components';

import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsServicesModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
