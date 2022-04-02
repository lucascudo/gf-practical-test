import { MenuItem } from "./menu-item";

export interface ICategory {
  name: string;
  items: MenuItem[];
  textures: string[];
  toppings: string[];
}

export class Category implements ICategory {
  constructor(
    public name: string,
    public items: MenuItem[],
    public textures: string[],
    public toppings: string[]
  ) {}
}
