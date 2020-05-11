import Product from '../src/Product';
import Cart from '../src/Cart';

let cart;

beforeEach(() => {
  cart = new Cart();
  cart.addProduct(new Product('Blue socks', 25));
  cart.addProduct(new Product('Yellow socks', 25));
});

describe('Cart class', () => {
  test('Add product', () => {
    expect(cart.addProduct(new Product('Green socks', 15))).toBe(3);
  });

  test('Get product by name', () => {
    expect(cart.getProduct('Blue socks').name).toBe('Blue socks');
  });

  test('Get products', () => {
    const products = cart.getProducts();
    expect(products.length).toBe(2);
    products.forEach((product) => {
      expect(product).toBeInstanceOf(Product);
    });
  });
});
