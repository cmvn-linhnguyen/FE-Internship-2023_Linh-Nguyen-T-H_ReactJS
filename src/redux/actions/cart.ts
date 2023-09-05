import { CartItemProps } from '../../shared/models/interface';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../types/cart';

export const addToCart = (cart: CartItemProps) => {
  return { type: ADD_TO_CART, payload: cart };
};

export const removeFromCart = (id: number) => {
  return { type: REMOVE_FROM_CART, payload: id };
};

export const updateCartItem = (id: number, quantity: number) => {
  return { type: UPDATE_CART_ITEM, payload: { id, quantity } };
};
