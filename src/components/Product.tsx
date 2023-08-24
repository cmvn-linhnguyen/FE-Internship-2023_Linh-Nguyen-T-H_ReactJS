interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
}

const Product = (props: ProductProps) => {
  return (
    <>
      <a className="product-link" href="/#">
        <div className="product d-flex fd-column">
          {props.discount ? (
            <span className="badge badge-danger product-discount">
              -{props.discount}%
            </span>
          ) : null}
          <div className="image-wrapper">
            <img
              className="img product-image"
              src={props.image}
              alt={props.name}
            />
          </div>
          <h4 className="product-name">{props.name}</h4>$
          {props.discount ? (
            <div className="product-price-group flex-row flex-space-between">
              <p className="product-price product-price-discount">
                ${((props.price * (100 - props.discount)) / 100).toFixed(2)}
              </p>
              <p className="product-price product-price-original">
                ${props.price}
              </p>
            </div>
          ) : (
            <p className="product-price">${props.price}</p>
          )}
        </div>
      </a>
    </>
  );
};

export default Product;
