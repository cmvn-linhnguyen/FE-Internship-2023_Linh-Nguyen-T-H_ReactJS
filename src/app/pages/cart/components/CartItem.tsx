import {
  CartComponentProps,
  CartItemProps,
} from '../../../../shared/models/interface';
import { CartService } from '../../../../shared/services/cart-service';
import { calcCartPrice, calcProductPrice } from '../../../../shared/utils';

export const CartItem = ({
  cartItem,
  cart,
  updateCart,
}: { cartItem: CartItemProps } & CartComponentProps) => {
  const cartService = new CartService();

  const handleDelete = (id: number): void => {
    updateCart(cartService.deleteCart(cart, id));
  };

  const updateQuantity = (id: number, quantity: number): void => {
    updateCart(cartService.updateCart(cart, id, quantity));
  };

  return (
    <tr className="table-row">
      <td className="col col-3">
        <img
          className="cart-item-img"
          src={cartItem.image}
          alt={cartItem.name}
        />
      </td>
      <td className="col col-3">{cartItem.name}</td>
      <td className="col col-2">
        <div className="price-wrap">
          {cartItem.discount ? (
            <div className="discount">
              <p className="discountedPrice">
                ${calcProductPrice(cartItem).toFixed(2)}
              </p>
              <p className="originalPrice">${cartItem.price}</p>
            </div>
          ) : (
            <p>${cartItem.price.toFixed(2)}</p>
          )}
          <p className="item-price">
            Total: ${calcCartPrice(cartItem).toFixed(2)}
          </p>
        </div>
      </td>
      <td className="col col-2">
        <div className="quantity-wrap d-flex ai-center">
          <button
            className={`quantity-update decrease pro-${cartItem.id}`}
            disabled={cartItem.quantity === 1}
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </button>
          <p className="item-quantity">{cartItem.quantity}</p>
          <button
            className={`quantity-update increase pro-${cartItem.id}`}
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="col col-2">
        <button
          className="delete-button"
          onClick={() => handleDelete(cartItem.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
