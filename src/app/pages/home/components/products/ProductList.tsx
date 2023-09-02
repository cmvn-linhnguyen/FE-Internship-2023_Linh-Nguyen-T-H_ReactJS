import { Product } from './Product';

import { products } from '../../../../../shared/data/data';
import {
  ProductComponentProps,
  ProductProps,
} from '../../../../../shared/models/interface';

export const ProductList = ({ updateCart }: ProductComponentProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: ProductProps) => (
        <li key={product.id} className="col col-3 col-sm-6">
          <Product product={product} updateCart={updateCart} />
        </li>
      ))}
    </ul>
  );
};
