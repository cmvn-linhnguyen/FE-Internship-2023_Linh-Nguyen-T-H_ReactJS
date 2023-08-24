import ProductList from './ProductList';

const ProductToday = () => {
  return (
    <section className="section section-products-today">
      <div className="container products-wrap">
        <h3 className="section-header section-title section-title-center products-today-header">
          Products in today
        </h3>
        <ProductList />
      </div>
    </section>
  );
};

export default ProductToday;
