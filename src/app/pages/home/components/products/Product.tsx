import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../../../../../shared/constants';
import {
  CartItemProps,
  ProductProps,
} from '../../../../../shared/models/interface';
import { calcProductPrice } from '../../../../../shared/utils';
import { addToCart } from '../../../../../redux/actions/cart';
import { StateProps } from '../../../../../redux/store';
import { toggleModal } from '../../../../../redux/actions/modal';

export const Product = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: StateProps) => state.auth.user);

  const handleAddToCart = (product: ProductProps) => {
    if (!user) {
      const cartItem: CartItemProps = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        discount: product.discount || 0,
        quantity: 1,
      };

      dispatch(addToCart(cartItem));
    } else {
      dispatch(toggleModal(true));
    }
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
          <div className="out-of-stock-label">sold out</div>
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
