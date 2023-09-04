import { Status, StorageKeys } from '../../../../../shared/constants';
import {
  CartItemProps,
  ProductComponentProps,
  ProductProps,
} from '../../../../../shared/models/interface';
import { CartService } from '../../../../../shared/services/cart-service';
import {
  calcProductPrice,
  getDataFromLocalStorage,
} from '../../../../../shared/utils';

type CombinedProps = { product: ProductProps } & ProductComponentProps;

export const Product = ({ product, updateCart }: CombinedProps) => {
  const cartService = new CartService();

  const handleAddToCart = (product: ProductProps) => {
    const cartItem: CartItemProps = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discount: product.discount || 0,
      quantity: 1,
    };

    updateCart(
      cartService?.addToCart(
        getDataFromLocalStorage(StorageKeys.CART),
        cartItem
      )
    );
  };

  return (
    <div className="product d-flex fd-column">
      <div
        className={`image-wrapper ${
          product.status === Status.OUT_OF_STOCK ? 'disable' : null
        }`}
      >
        <img
          className="img product-image"
          src={product.image}
          alt={product.name}
        />
        {product.status === Status.OUT_OF_STOCK ? (
          <div className="out-of-stock-label">Out of Stock</div>
        ) : (
          <button
            className="btn btn-outline add-to-cart-button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        )}
        {product.discount ? (
          <span className="badge badge-danger product-discount">
            -{product.discount}%
          </span>
        ) : null}
      </div>
      <h4 className="product-name">{product.name}</h4>
      {product.discount ? (
        <div className="product-price-group d-flex jc-between ai-center">
          <p className="product-price product-price-discount">
            ${calcProductPrice(product).toFixed(2)}
          </p>
          <p className="product-price product-price-original">
            ${product.price}
          </p>
        </div>
      ) : (
        <p className="product-price">${product.price}</p>
      )}
    </div>
  );
};
