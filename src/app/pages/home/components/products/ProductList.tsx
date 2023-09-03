import { useSelector } from 'react-redux';

import { Product } from './Product';

import { ProductProps } from '../../../../../shared/models/interface';
import { StateProps } from '../../../../../redux/store';

export const ProductList = () => {
  const products = useSelector((state: StateProps) => state.products.products);

  return (
    <ul className="product-list row">
      {products.map((product: ProductProps) => (
        <li key={product.id} className="col col-3 col-sm-6">
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};
