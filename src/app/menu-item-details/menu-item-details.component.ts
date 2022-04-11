import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
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
  currency: string;
  extras: MenuItem[];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
    this.getData();
  }

  getData(): void {
    this.currency = this.menuService.get().currency;
    this.menuItem = this.menuService.getItemById(this.menuItemId);
    this.extras = this.menuService.getExtrasByItemId(this.menuItemId).map(e => {
      return {
        label: e.name + (e.required ? ' (required)' : ''),
        items: e.items.map(item => {
          return { label: item };
        })
      }
    });
  }
}
