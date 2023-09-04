import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CartItemProps } from '../../../../shared/models/interface';
import { calcCartPrice, calcProductPrice } from '../../../../shared/utils';
import {
  removeFromCart,
  updateCartItem,
} from '../../../../redux/actions/cartAction';

export const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch(updateCartItem(id, quantity));
  };

  const handleFocus = () => {
    setIsEditable(true);
  };

  const onBlurInput = () => {
    const inputValue = +inputRef.current!.value;
    if (0 < inputValue && inputValue < 100) {
      dispatch(updateCartItem(cartItem.id, inputValue));
    }
    setIsError(false);
    setIsEditable(false);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      const inputValue = +inputRef.current!.value;
      if (inputValue < 1 || inputValue > 99) {
        setIsError(true);
      } else {
        dispatch(updateCartItem(cartItem.id, inputValue));
        setIsError(false);
        setIsEditable(false);
      }
    }
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
          <p className="item-price">${calcCartPrice(cartItem).toFixed(2)}</p>
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
          {isEditable ? (
            <input
              className="item-quantity-input"
              type="number"
              autoFocus
              defaultValue={cartItem.quantity}
              ref={inputRef}
              onBlur={onBlurInput}
              onKeyUp={handleInputKeyPress}
            />
          ) : (
            <span onDoubleClick={handleFocus} className="item-quantity">
              {cartItem.quantity}
            </span>
          )}
          <button
            className={`quantity-update increase pro-${cartItem.id}`}
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
            disabled={cartItem.quantity === 99}
          >
            +
          </button>
          {isError && (
            <span className="error-message">Vui lòng nhập số từ 1 đến 99.</span>
          )}
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
