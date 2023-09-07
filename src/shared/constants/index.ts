export enum Status {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'out_of_stock',
}

export enum StorageKeys {
  CART = 'cart',
  PRODUCTS = 'products',
  USER = 'user',
}

export enum ToastTypes {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export const RegEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const RegPassword = /^.{6,}$/;
