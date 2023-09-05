import { useSelector } from 'react-redux';

import { ProductList } from './products/ProductList';
import { StateProps } from '../../../../redux/store';

export const ProductToday = () => {
  const products = useSelector((state: StateProps) => state.products.products);
  const isLoading = useSelector(
    (state: StateProps) => state.products.isLoading
  );
  const error = useSelector((state: StateProps) => state.products.error);

  return (
    <section className="section section-products-today">
      <div className="container products-wrap">
        <h3 className="section-header section-title section-title-center products-today-header">
          Products in today
        </h3>
        <ProductList products={products} isLoading={isLoading} error={error} />
      </div>
    </section>
  );
};
