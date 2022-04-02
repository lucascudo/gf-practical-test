import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menu;

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menu = this.menuService.get();
    this.menu = this.menu.default;
    console.log(this.menu);
  }

  navigateToDetails(itemId) {
    this.router.navigate(['menu-item-details', itemId]);
  }
}
