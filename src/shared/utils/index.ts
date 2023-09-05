import { StorageKeys } from '../constants';
import { CartItemProps, ProductProps } from '../models/interface';

export const getDataFromLocalStorage = (key: StorageKeys) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const saveDataToLocalStorage = (
  key: StorageKeys,
  data: CartItemProps[] | ProductProps[]
): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const calcProductPrice = (
  product: ProductProps | CartItemProps
): number => {
  return (product.price * (100 - product.discount)) / 100;
};

export const calcCartPrice = (cart: CartItemProps): number => {
  return calcProductPrice(cart) * cart.quantity;
};
