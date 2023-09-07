import { StorageKeys } from '../../shared/constants';
import { ProductProps } from '../../shared/models/interface';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/utils';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../types/product';

export interface ProductsState {
  isLoading: boolean;
  products: ProductProps[];
  error: any;
}

const initialData: ProductsState = {
  isLoading: false,
  products: getDataFromLocalStorage(StorageKeys.PRODUCTS),
  error: null,
};

export const productsReducer = (
  state = initialData,
  action: any
): ProductsState => {
  const objReducer: Record<string, () => ProductsState> = {
    [FETCH_PRODUCTS_REQUEST]: () => ({ ...state, isLoading: true }),

    [FETCH_PRODUCTS_SUCCESS]: () => {
      saveDataToLocalStorage(StorageKeys.PRODUCTS, action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };
    },

    [FETCH_PRODUCTS_FAILURE]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  };

  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
