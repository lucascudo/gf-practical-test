import { Injectable } from '@angular/core';
import * as MenuJson from '../assets/menu.json';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  get() {
    return MenuJson;
  }
}
