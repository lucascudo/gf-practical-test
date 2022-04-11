import { Dish } from "./dish";
import { Extra } from "./extra";

export interface Category {
  name: string;
  items: Dish[];
  extras?: Extra[];
}
