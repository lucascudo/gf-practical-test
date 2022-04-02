import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import menuJson from '../assets/menu.json';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should load menu data correctly', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.get()).toEqual(menuJson);
  });
});
