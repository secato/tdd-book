export default class Order {
  private _client: string;
  private _total: number;
  private _itemsQuantity: number;

  constructor(client: string, totalValue: number, itemsQuantity: number) {
    this._client = client;
    this._total = totalValue;
    this._itemsQuantity = itemsQuantity;
  }

  get client() {
    return this._client;
  }

  get total() {
    return this._total;
  }

  get itemsQuantity() {
    return this._itemsQuantity;
  }
}
