import { CART_ACTION, LOCAL_STORAGE_KEY } from '../constants';
import { CartProps } from '../models/interface';
import { calcCartPrice, saveDataToLocalStorage } from '../utils';

export class CartService {
  addToCart = (carts: CartProps[], cart: CartProps): CartProps[] => {
    const cartItem = carts.find((item: CartProps) => item.id === cart.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      carts.push(cart);
    }
    saveDataToLocalStorage(LOCAL_STORAGE_KEY.Cart, carts);
    return carts;
  };

  deleteCart = (carts: CartProps[], id: number): CartProps[] => {
    return carts.filter((item) => item.id !== id);
  };

  updateCart = (
    carts: CartProps[],
    id: number,
    action: CART_ACTION.Increase | CART_ACTION.Decrease
  ): CartProps[] => {
    return carts.map((cartItem) => {
      if (cartItem.id === id) {
        if (action === CART_ACTION.Increase)
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        if (action === CART_ACTION.Decrease && cartItem.quantity > 1)
          return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
  };

  calcTotalPrice = (carts: CartProps[]): number => {
    return carts.reduce((total, cartItem) => {
      return total + calcCartPrice(cartItem);
    }, 0);
  };

  getQuantity = (carts: CartProps[]): number => {
    return carts.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
  };
}
