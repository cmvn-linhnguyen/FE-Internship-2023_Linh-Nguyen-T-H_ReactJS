import { ProductProps } from '../../shared/models/interface';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../types/product';

export const fetchProductsRequest = () => async (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  setTimeout(async () => {
    try {
      const response = await fetch(
        'products.json' + ['', '*', ''][Math.floor(Math.random() * 3)]
      );
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
      console.log(error);
    }
  }, 2000);
};

export const fetchProductsSuccess = (products: ProductProps[]) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

export const fetchProductsFailure = (error: any) => {
  return { type: FETCH_PRODUCTS_FAILURE, payload: error };
};
