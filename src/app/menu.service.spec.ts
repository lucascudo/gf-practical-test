import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import menuJson from '../assets/menu.json';
import { Dish } from './models/dish';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should load menu data correctly', () => {
    const service: MenuService = TestBed.get(MenuService);
    const singleItem: Dish = menuJson.categories[0].dishes[0];
    expect(service.getGloriaMenu()).toEqual(menuJson);
    expect(service.getCurrency()).toEqual(menuJson.currency);
    expect(service.getItemById(singleItem.id)).toEqual(singleItem);
    expect(service.getExtrasByItemId(singleItem.id)).toEqual(menuJson.categories[0].extras);
  });
});
