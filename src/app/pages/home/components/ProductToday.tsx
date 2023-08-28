import React from 'react';

import ProductList from './products/ProductList';

import { ProductComponentProps } from '../../../../shared/models/interface';

const ProductToday = (props: ProductComponentProps) => {
  return (
    <section className="section section-products-today">
      <div className="container products-wrap">
        <h3 className="section-header section-title section-title-center products-today-header">
          Products in today
        </h3>
        <ProductList
          cartService={props.cartService}
          updateCartData={props.updateCartData}
        />
      </div>
    </section>
  );
};

export default ProductToday;
