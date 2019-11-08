import {Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';

import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() buyProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onBuyProduct() {
    this.buyProduct.emit(this.product);
  }

}
