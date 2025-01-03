import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  public products: ProductType[] = [
    {
      image: 'product01.png',
      title: 'Макарун с малиной',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product02.png',
      title: 'Пирог с манго',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product03.png',
      title: 'Пирог с ванилью',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product04.png',
      title: 'Пирог с фисташками',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior:"smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder(){
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

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  showPresent: boolean = true;

}
