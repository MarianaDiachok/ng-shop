export class ProductModel {
  constructor(
    public id: number | string,
    public name: string,
    public price: number,
    public amount: number,
    public isAvailable: boolean,
  ) {

  }

}
