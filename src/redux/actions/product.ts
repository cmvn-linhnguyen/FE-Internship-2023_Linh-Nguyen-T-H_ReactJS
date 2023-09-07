import { ProductProps } from '../../shared/models/interface';
import { fetchProducts } from '../../shared/services/products-service';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../types/product';

export const fetchProductsRequest = () => async (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  fetchProducts()
    .then((data) => dispatch(fetchProductsSuccess(data)))
    .catch((error: any) => dispatch(fetchProductsFailure(error)));
};

export const fetchProductsSuccess = (products: ProductProps[]) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

export const fetchProductsFailure = (error: any) => {
  return { type: FETCH_PRODUCTS_FAILURE, payload: error };
};
