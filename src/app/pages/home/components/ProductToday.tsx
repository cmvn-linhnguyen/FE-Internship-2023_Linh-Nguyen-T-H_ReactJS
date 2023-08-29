import { ProductList } from './products/ProductList';

import { ProductComponentProps } from '../../../../shared/models/interface';

export const ProductToday = ({ updateCart }: ProductComponentProps) => {
  return (
    <section className="section section-products-today">
      <div className="container products-wrap">
        <h3 className="section-header section-title section-title-center products-today-header">
          Products in today
        </h3>
        <ProductList updateCart={updateCart} />
      </div>
    </section>
  );
};
