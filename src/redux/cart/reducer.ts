import { CartItemProps } from '../../shared/models/interface';
import { getDataFromLocalStorage } from '../../shared/utils';
import { StorageKeys } from '../../shared/constants';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from './type';

export interface CartState {
  cart: CartItemProps[];
}

const initialState: CartState = {
  cart: getDataFromLocalStorage(StorageKeys.CART),
};

export const cartReducer = (state = initialState, action: any): CartState => {
  const objReducer: Record<string, () => CartState> = {
    [ADD_TO_CART]: () => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.unshift({ ...action.payload, quantity: 1 });
      }

      return { ...state, cart: [...state.cart] };
    },

    [REMOVE_FROM_CART]: () => ({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }),

    [UPDATE_CART_ITEM]: () => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }

      return { ...state, cart: [...state.cart] };
    },
  };

  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
