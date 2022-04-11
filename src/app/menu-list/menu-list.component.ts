import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { GloriaMenu } from '../models/gloria-menu';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menu: GloriaMenu;
  selectedDishes: Dish[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.menu = this.menuService.getGloriaMenu();
  }
}
