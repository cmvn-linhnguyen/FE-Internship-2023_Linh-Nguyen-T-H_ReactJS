import { Status, StorageKey } from '../../../../../shared/constants';
import {
  CartProps,
  ProductComponentProps,
  ProductProps,
} from '../../../../../shared/models/interface';
import {
  calcProductPrice,
  getDataFromLocalStorage,
} from '../../../../../shared/utils';

type Type = {
  data: ProductProps;
};

type CombinedProps = Type & ProductComponentProps;

const Product = (props: CombinedProps) => {
  const handleAddToCart = (product: ProductProps) => {
    const cartItem: CartProps = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discount: product.discount || 0,
      quantity: 1,
    };

    const updatedCart = props.cartService?.addToCart(
      getDataFromLocalStorage(StorageKey.CART),
      cartItem
    );
    props.updateCartData(updatedCart);
  };

  return (
    <>
      <div className="product d-flex fd-column">
        <div
          className={`image-wrapper ${
            props.data.status === Status.OUT_OF_STOCK ? 'disable' : null
          }`}
        >
          <img
            className="img product-image"
            src={props.data.image}
            alt={props.data.name}
          />
          {props.data.status === Status.OUT_OF_STOCK && (
            <div className="out-of-stock-label">Out of Stock</div>
          )}
          {props.data.status !== Status.OUT_OF_STOCK && (
            <button
              className="btn btn-outline add-to-cart-button"
              onClick={() => handleAddToCart(props.data)}
            >
              Add to Cart
            </button>
          )}
          {props.data.discount ? (
            <span className="badge badge-danger product-discount">
              -{props.data.discount}%
            </span>
          ) : null}
        </div>
        <h4 className="product-name">{props.data.name}</h4>
        {props.data.discount ? (
          <div className="product-price-group d-flex jc-between ai-center">
            <p className="product-price product-price-discount">
              ${calcProductPrice(props.data).toFixed(2)}
            </p>
            <p className="product-price product-price-original">
              ${props.data.price}
            </p>
          </div>
        ) : (
          <p className="product-price">${props.data.price}</p>
        )}
      </div>
    </>
  );
};

export default Product;
