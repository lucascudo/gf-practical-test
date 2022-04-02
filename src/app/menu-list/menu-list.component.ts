import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menu: Category[];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menu = this.menuService.get();
  }

  navigateToDetails(itemId) {
    this.router.navigate(['menu-item-details', itemId]);
  }
}
