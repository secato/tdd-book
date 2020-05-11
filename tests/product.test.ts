import Product from '../src/Product';

let product: Product;

beforeEach(() => {
  product = new Product('Blue socks', 25);
});

describe('Product class', () => {
  test('Get name', () => {
    expect(product.name).toBe('Blue socks');
  });

  test('Get value', () => {
    expect(product.price).toBe(25.0);
  });
});
