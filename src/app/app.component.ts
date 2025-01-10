import { Component, OnInit } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь,но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }
  products: ProductType[] = [];

  constructor(private ProductService: ProductService, public cartService: CartService) {}
  ngOnInit(): void {
    this.products = this.ProductService.getProducts();
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior:"smooth"});
  }

  addToCart(product: ProductType, target: HTMLElement): void {
    alert(`${product.title} добавлен в корзину!`);
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.addingToCart(product);
  }

  createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберете макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните строку имени');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните строку телефона');
      return;
    }
    alert('Спасибо за заказ!');
    this.cartService.clearCart();
    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  showPresent: boolean = true;
}
