import { StorageKeys } from '../../shared/constants';
import { UserProps } from '../../shared/models/interface';
import {
  getObjectFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/utils';
import {
  CLEAR_ERROR,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export interface AuthState {
  isLoading: boolean;
  user: UserProps | null;
  error: any;
  successMessage: any;
}

const initialData: AuthState = {
  isLoading: false,
  user: getObjectFromLocalStorage(StorageKeys.USER),
  error: null,
  successMessage: null,
};

export const authReducer = (state = initialData, action: any): AuthState => {
  const objReducer: Record<string, () => AuthState> = {
    [LOGIN_REQUEST]: () => ({ ...state, isLoading: true }),

    [LOGIN_SUCCESS]: () => {
      saveDataToLocalStorage(StorageKeys.USER, action.payload);
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        successMessage: 'Login Successful!',
        error: null,
      };
    },

    [LOGIN_FAILED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),

    [CLEAR_ERROR]: () => ({
      ...state,
      error: null,
      successMessage: null,
    }),

    [LOGOUT]: () => {
      saveDataToLocalStorage(StorageKeys.USER, null);
      return {
        ...state,
        user: null,
      };
    },
  };

  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
