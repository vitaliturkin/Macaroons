import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() {}

  getProducts(): ProductType[] {
    return [
      {
        image: 'product01.png',
        title: 'Макарун с малиной',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: 'product02.png',
        title: 'Пирог с манго',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: 'product03.png',
        title: 'Пирог с ванилью',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: 'product04.png',
        title: 'Пирог с фисташками',
        amount: '1 шт.',
        price: 1.7,
      },
    ]
  }
}