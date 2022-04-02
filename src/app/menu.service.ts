import { Injectable } from '@angular/core';
import menuJson from '../assets/menu.json';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  get(): Category[] {
    return menuJson;
  }
}
