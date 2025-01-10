import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: ProductType;

  @Input() i: number = 0;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      amount: '',
      price: 0,
    };
  }

  addProductToCart(): void {
    this.addToCartEvent.emit(this.product)
  }
}
