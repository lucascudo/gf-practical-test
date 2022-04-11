import { Extra } from "./extra";

export interface Dish {
  id: number;
  name: string;
  price: number;
  description?: string;
  extras?: Extra[];
}
