import { Dish } from "./dish";

export interface ICategory {
  name: string;
  items: Dish[];
  textures: string[];
  toppings: string[];
}

export class Category implements ICategory {
  constructor(
    public name: string,
    public items: Dish[],
    public textures: string[],
    public toppings: string[]
  ) {}
}
