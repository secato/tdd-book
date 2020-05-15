import Cart from './chapter2/Cart';
import Product from './chapter2/Product';
import MajorMinor from './chapter2/MajorMinor';

const cart = new Cart();
const majorMinor = new MajorMinor();

cart.addProduct(new Product('GTA 6', 250));
cart.addProduct(new Product('Light Souls 3', 200));

majorMinor.finds(cart)

console.log(majorMinor.major);
