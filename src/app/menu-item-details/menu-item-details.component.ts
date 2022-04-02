import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { MenuItem } from 'primeng-lts/api';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItemId: number;
  menuItem: Dish;
  menu: Category[];
  textures: MenuItem[];
  toppings: MenuItem[];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
    this.menu = this.menuService.get();
    for (let category of this.menu) {
      this.menuItem = category.items.find(menuItem => menuItem.id === this.menuItemId);
      if (this.menuItem) {
        this.textures = [{
          label: 'Crust (required)',
          items: category.textures.map(texture => {
            return { label: texture };
          })
        }];
        this.toppings = [{
          label: 'Toppings',
          items: category.toppings.map(topping => {
            return { label: topping };
          })
        }];
        break;
      }
    }
  }
}
