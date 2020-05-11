import Product from './Product';

export default class Cart {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    return this.products.push(product);
  }

  getProduct(name: string): Product {
    return this.products.find((product) => product.name === name) || null;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
