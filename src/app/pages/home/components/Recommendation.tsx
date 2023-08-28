import React from 'react';

import ProductList from './products/ProductList';

import { ProductComponentProps } from '../../../../shared/models/interface';

const Recommendation = (props: ProductComponentProps) => {
  return (
    <section className="section section-recommendation">
      <div className="container products-wrap">
        <div className="section-header d-flex jc-between ai-center recommendation-title">
          <h3 className="section-title">Selected just for you</h3>
          <a className="btn btn-outline" href="/#">
            SHOW MORE
          </a>
        </div>
        <ProductList
          cartService={props.cartService}
          updateCartData={props.updateCartData}
        />
      </div>
    </section>
  );
};

export default Recommendation;
