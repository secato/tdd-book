import Product from './Product';
import Cart from './Cart';

export default class MajorMinor {
  private _minor?: Product;
  private _major?: Product;

  finds(cart: Cart) {
    for (const product of cart.getProducts()) {
      if (!this._minor || product.price < this._minor.price) {
        this._minor = product;
      }
      if (!this._major || product.price > this._major.price) {
        this._major = product;
      }
    }
  }

  get minor() {
    return this._minor;
  }

  get major() {
    return this._major;
  }
}
