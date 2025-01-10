import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalAmount: number = 0
  totalPrice:number = 0
  constructor() { }

  addingToCart(product: ProductType): void {
    this.totalAmount++;
    this.totalPrice += product.price;
  }

  clearCart(): void {
    this.totalAmount = 0;
    this.totalPrice = 0;
  }
}
