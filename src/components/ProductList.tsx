import Product from './Product';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import product4 from '../assets/images/product-4.png';

const products = [
  {
    id: 1,
    image: product1,
    name: 'T-Shirt Summer Vibes',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    image: product2,
    name: 'Loose Knit 3/4 Sleeve',
    price: 119.99,
  },
  {
    id: 3,
    image: product3,
    name: 'Basic Slim Fit T-Shirt',
    price: 79.99,
  },
  {
    id: 4,
    image: product4,
    name: 'Loose Textured T-Shirt',
    price: 119.99,
  },
];

const ProductList = () => {
  return (
    <ul className="product-list row">
      <li className="col col-3">
        <Product {...products[0]} />
      </li>
      <li className="col col-3">
        <Product {...products[1]} />
      </li>
      <li className="col col-3">
        <Product {...products[2]} />
      </li>
      <li className="col col-3">
        <Product {...products[3]} />
      </li>
    </ul>
  );
};

export default ProductList;
