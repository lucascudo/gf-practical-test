import { Injectable } from '@angular/core';
import menuJson from '../assets/menu.json';
import { Dish } from './models/dish';
import { GloriaMenu } from './models/gloria-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
    this.menu = menuJson;
  }

  private menu: GloriaMenu;

  getGloriaMenu(): GloriaMenu {
    return this.menu;
  }

  getCurrency(): string {
    return this.menu.currency;
  }

  getItemById(id: number): Dish {
    let menuItem;
    for (let category of this.menu.categories) {
      menuItem = category.items.find(item => item.id === id);
      if (menuItem) {
        return menuItem;
      }
    }
  }

  getExtrasByItemId(id: number) {
    for (let category of this.menu.categories) {
      if (category.items.some(item => item.id === id)) {
        return category.extras;
      }
    }
  }
}
