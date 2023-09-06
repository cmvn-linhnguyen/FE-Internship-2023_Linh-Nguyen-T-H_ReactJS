import { UserProps } from '../../shared/models/interface';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export interface AuthState {
  isLoading: boolean;
  isLogged: boolean;
  user: UserProps | null;
  error: any;
}

const initialData: AuthState = {
  isLoading: false,
  isLogged: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialData, action: any): AuthState => {
  const objReducer: Record<string, () => AuthState> = {
    [LOGIN_REQUEST]: () => ({ ...state, isLoading: true }),

    [LOGIN_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      isLogged: true,
      user: action.payload,
      error: null,
    }),

    [LOGIN_FAILED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),

    [LOGOUT]: () => ({
      ...state,
      isLogged: false,
      user: null,
    }),
  };

  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
