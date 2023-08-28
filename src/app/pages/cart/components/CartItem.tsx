import { CART_ACTION } from '../../../../shared/constants';
import {
  CartComponentProps,
  CartProps,
} from '../../../../shared/models/interface';
import { calcCartPrice, calcProductPrice } from '../../../../shared/utils';

const CartItem = ({
  cart,
  cartData,
  cartService,
  updateCartData,
}: { cart: CartProps } & CartComponentProps) => {
  const handleDelete = (id: number): void => {
    updateCartData(cartService.deleteCart(cartData, id));
  };

  const updateQuantity = (id: number, action: CART_ACTION): void => {
    updateCartData(cartService.updateCart(cartData, id, action));
  };

  return (
    <tr className="table-row">
      <td className="col col-3">
        <img className="cart-item-img" src={cart.image} alt={cart.name} />
      </td>
      <td className="col col-3">{cart.name}</td>
      <td className="col col-2">
        <div className="price-wrap">
          {cart.discount ? (
            <div className="discount">
              <p className="discountedPrice">
                ${calcProductPrice(cart).toFixed(2)}
              </p>
              <p className="originalPrice">${cart.price}</p>
            </div>
          ) : (
            <p>${cart.price.toFixed(2)}</p>
          )}
          <p className="item-price">Total: ${calcCartPrice(cart).toFixed(2)}</p>
        </div>
      </td>
      <td className="col col-2">
        <div className="quantity-wrap d-flex ai-center">
          <button
            className={`quantity-update decrease pro-${cart.id}`}
            disabled={cart.quantity === 1}
            onClick={() => updateQuantity(cart.id, CART_ACTION.Decrease)}
          >
            -
          </button>
          <p className="item-quantity">{cart.quantity}</p>
          <button
            className={`quantity-update increase pro-${cart.id}`}
            onClick={() => updateQuantity(cart.id, CART_ACTION.Increase)}
          >
            +
          </button>
        </div>
      </td>
      <td className="col col-2">
        <button className="delete-button" onClick={() => handleDelete(cart.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
