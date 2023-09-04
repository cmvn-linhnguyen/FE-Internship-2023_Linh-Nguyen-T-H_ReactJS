import { ProductProps } from '../../shared/models/interface';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../types/productType';

export interface ProductsState {
  loading: boolean;
  products: ProductProps[];
  error: string;
}

const initialData: ProductsState = {
  loading: false,
  products: [],
  error: '',
};

export const productsReducer = (
  state = initialData,
  action: any
): ProductsState => {
  const objReducer: Record<string, () => ProductsState> = {
    [FETCH_PRODUCTS_REQUEST]: () => ({ ...state, loading: true }),

    [FETCH_PRODUCTS_SUCCESS]: () => ({
      ...state,
      loading: false,
      products: action.payload,
    }),

    [FETCH_PRODUCTS_FAILURE]: () => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  };

  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
