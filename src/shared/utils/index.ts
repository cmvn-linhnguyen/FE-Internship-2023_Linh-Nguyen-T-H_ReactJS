import { StorageKey } from '../constants';
import { CartProps, ProductProps } from '../models/interface';

export const getDataFromLocalStorage = (key: StorageKey): CartProps[] => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const saveDataToLocalStorage = (
  key: StorageKey,
  data: CartProps[]
): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const calcProductPrice = (product: ProductProps | CartProps): number => {
  return (product.price * (100 - product.discount)) / 100;
};

export const calcCartPrice = (cart: CartProps): number => {
  return calcProductPrice(cart) * cart.quantity;
};
