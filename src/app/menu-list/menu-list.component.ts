import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { MenuItem } from 'primeng-lts/api';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  currency: string = 'EUR';
  items: MenuItem[];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private menuService: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
    const menu: Category[] = this.menuService.get();
    this.items = menu.map(category => {
      return {
        label: category.name,
        items: category.items.map(item => {
          let label: string = item.name;
          if (item.description) {
            label += ' (' + item.description + ')';
          }
          label += ' - ' + formatCurrency(item.price, this.locale, getCurrencySymbol(this.currency, 'narrow'), this.currency);
          return {
            label: label,
            routerLink: ['/menu-item-details', item.id]
          };
        })
      };
    });
  }
}
