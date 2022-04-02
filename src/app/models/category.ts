import { Dish } from "./dish";

export interface Category {
  name: string;
  items: Dish[];
  textures: string[];
  toppings: string[];
}
