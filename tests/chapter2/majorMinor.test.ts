import Cart from '../../src/chapter2/Cart';
import Product from '../../src/chapter2/Product';
import MajorMinor from '../../src/chapter2/MajorMinor';

let majorMinor: MajorMinor;
let cart: Cart;

beforeEach(() => {
  majorMinor = new MajorMinor();
  cart = new Cart();
});

describe('Cart Actions class', () => {
  test('Finds major and minor', () => {
    cart.addProduct(new Product('Green socks', 5));
    cart.addProduct(new Product('Blue socks', 10));
    cart.addProduct(new Product('Yellow socks', 15));

    majorMinor.finds(cart);
    expect(majorMinor.minor.name).toBe('Green socks');
    expect(majorMinor.major.name).toBe('Yellow socks');
  });

  test('Finds major and minor with products in reverse order', () => {
    cart.addProduct(new Product('Yellow socks', 15));
    cart.addProduct(new Product('Blue socks', 10));
    cart.addProduct(new Product('Green socks', 5));

    majorMinor.finds(cart);
    expect(majorMinor.minor.name).toBe('Green socks');
    expect(majorMinor.major.name).toBe('Yellow socks');
  });

  test('Finds major and minor with multiple varying products', () => {
    cart.addProduct(new Product('Yellow socks', 15));
    cart.addProduct(new Product('Green socks', 5));
    cart.addProduct(new Product('Fridge', 450));
    cart.addProduct(new Product('Blue socks', 10));
    cart.addProduct(new Product('A4', 2));

    majorMinor.finds(cart);
    expect(majorMinor.minor.name).toBe('A4');
    expect(majorMinor.major.name).toBe('Fridge');
  });

  test('Finds major and minor value products with just one product', () => {
    const product = new Product('gta 6', 250)
    cart.addProduct(product);

    majorMinor.finds(cart);
    expect(product).toEqual(majorMinor.minor);
    expect(product).toEqual(majorMinor.major);
  });
});
