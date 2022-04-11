import { Category } from "./category";

export interface GloriaMenu {
  id: number;
  name: string;
  currency: string;
  categories: Category[];
}
