import Product from './Product';

import { products } from '../../../../../shared/data/data';
import {
  ProductComponentProps,
  ProductProps,
} from '../../../../../shared/models/interface';

const ProductList = (props: ProductComponentProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: ProductProps) => (
        <li key={product.id} className="col col-3">
          <Product
            data={product}
            cartService={props.cartService}
            updateCartData={props.updateCartData}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
