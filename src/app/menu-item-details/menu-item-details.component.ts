import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../models/dish';
import { Extra } from '../models/extra';


@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItemId: number;
  menuItem: Dish;
  currency: string;
  extras: Extra[];
  selectedExtras: string[] = [];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
    this.getData();
  }

  getData(): void {
    this.currency = this.menuService.getCurrency();
    this.menuItem = this.menuService.getItemById(this.menuItemId);
    this.extras = this.menuService.getExtrasByItemId(this.menuItemId).map((e) => {
      e.pSelectItems = e.items.map(i => {
        return { label: i, value: i };
      });
      return e;
    });
  }
}
