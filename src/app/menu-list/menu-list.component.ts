import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from 'primeng-lts/api';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { GloriaMenu } from '../models/gloria-menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  items: MenuItem[];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const menu: GloriaMenu = this.menuService.getGloriaMenu();
    this.items = menu.categories.map(category => {
      return {
        label: category.name,
        items: category.items.map(item => {
          let label: string = item.name;
          if (item.description) {
            label += ' (' + item.description + ')';
          }
          label += ' - ' + formatCurrency(item.price, this.locale, getCurrencySymbol(menu.currency, 'narrow'), menu.currency);
          return {
            label: label,
            routerLink: ['/menu-item-details', item.id]
          };
        })
      };
    });
  }
}
