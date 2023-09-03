import { ProductProps } from '../../shared/models/interface';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from './type';

export const fetchProductsRequest = () => async (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  return fetch('./products.json')
    .then((response) => response.json())
    .then((data) => dispatch(fetchProductsSuccess(data)))
    .catch((error) => dispatch(fetchProductsFailure(error)));
};

export const fetchProductsSuccess = (products: ProductProps[]) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

export const fetchProductsFailure = (error: any) => {
  return { type: FETCH_PRODUCTS_FAILURE, payload: error };
};
