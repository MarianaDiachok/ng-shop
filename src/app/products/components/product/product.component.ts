import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() buy = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onBuyProduct(product) {
    this.buy.emit(product);
  }

}
