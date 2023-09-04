import { ProductList } from './products/ProductList';

import { ProductComponentProps } from '../../../../shared/models/interface';

export const Recommendation = ({ updateCart }: ProductComponentProps) => {
  return (
    <section className="section section-recommendation">
      <div className="container products-wrap">
        <div className="section-header d-flex jc-between ai-center recommendation-title">
          <h3 className="section-title">Selected just for you</h3>
          <a className="btn btn-outline" href="/#">
            SHOW MORE
          </a>
        </div>
        <ProductList updateCart={updateCart} />
      </div>
    </section>
  );
};
