export interface IMenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export class MenuItem implements IMenuItem {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description?: string
  ) {}
}
