import { useSelector } from 'react-redux';

import { ProductList } from './products/ProductList';
import { StateProps } from '../../../../redux/store';
import { error } from 'console';

export const Recommendation = () => {
  const products = useSelector((state: StateProps) => state.products.products);
  const isLoading = useSelector(
    (state: StateProps) => state.products.isLoading
  );
  const error = useSelector((state: StateProps) => state.products.error);

  return (
    <section className="section section-recommendation">
      <div className="container products-wrap">
        <div className="section-header d-flex jc-between ai-center recommendation-title">
          <h3 className="section-title">Selected just for you</h3>
          <a className="btn btn-outline" href="/#">
            SHOW MORE
          </a>
        </div>
        <ProductList products={products} isLoading={isLoading} error={error} />
      </div>
    </section>
  );
};
