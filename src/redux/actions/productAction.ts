import { StorageKeys } from '../../shared/constants';
import { ProductProps } from '../../shared/models/interface';
import { saveDataToLocalStorage } from '../../shared/utils';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../types/productType';

export const fetchProductsRequest = () => async (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  return fetch('./products.json')
    .then((response) => response.json())
    .then((data) => {
      saveDataToLocalStorage(StorageKeys.PRODUCTS, data);
      dispatch(fetchProductsSuccess(data));
    })
    .catch((error) => dispatch(fetchProductsFailure(error)));
};

export const fetchProductsSuccess = (products: ProductProps[]) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

export const fetchProductsFailure = (error: any) => {
  return { type: FETCH_PRODUCTS_FAILURE, payload: error };
};
