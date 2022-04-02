import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../models/menu-item';
import { Category } from '../models/category';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItemId: number;
  menuItem: MenuItem;
  menu: Category[];
  textures: string[];
  toppings: string[];

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
        this.textures = category.textures;
        this.toppings = category.toppings;
        break;
      }
    }
  }
}
