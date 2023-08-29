import { CartItemProps } from '../models/interface';
import { calcCartPrice } from '../utils';

export class CartService {
  addToCart = (
    carts: CartItemProps[],
    cart: CartItemProps
  ): CartItemProps[] => {
    const cartItem = carts.find((item: CartItemProps) => item.id === cart.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      carts.push(cart);
    }
    return carts;
  };

  deleteCart = (carts: CartItemProps[], id: number): CartItemProps[] => {
    return carts.filter((item) => item.id !== id);
  };

  updateCart = (
    carts: CartItemProps[],
    id: number,
    quantity: number
  ): CartItemProps[] => {
    return carts.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: quantity };
      }
      return cartItem;
    });
  };

  calcTotalPrice = (carts: CartItemProps[]): number => {
    return carts.reduce((total, cartItem) => {
      return total + calcCartPrice(cartItem);
    }, 0);
  };

  getQuantity = (carts: CartItemProps[]): number => {
    return carts.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
  };
}
