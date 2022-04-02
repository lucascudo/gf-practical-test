export interface IDish {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export class Dish implements IDish {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description?: string
  ) {}
}
