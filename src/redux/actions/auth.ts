import { UserProps } from '../../shared/models/interface';
import {
  CLEAR_ERROR,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export const loginRequest = (user: UserProps) => async (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });

  setTimeout(async () => {
    try {
      const response = await fetch('accounts.json');
      const data: UserProps[] = await response.json();
      const userItem = data.find(
        (item) => item.email === user.email && item.password === user.password
      );
      if (userItem) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailed('Email or password is incorrect.'));
      }
    } catch (error) {
      dispatch(loginFailed('Something went wrong.'));
    }
  }, 2000);
};

export const loginSuccess = (user: UserProps) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailed = (error: any) => {
  return { type: LOGIN_FAILED, payload: error };
};

export const clearError = () => {
  return { type: CLEAR_ERROR };
};

export const logout = () => {
  return { type: LOGOUT };
};
