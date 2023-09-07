import { UserProps } from '../../shared/models/interface';
import { login } from '../../shared/services/auth-service';
import {
  CLEAR_ERROR,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export const loginRequest = (user: UserProps) => async (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });

  login(user)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((error) => {
      dispatch(loginFailed(error));
    });
};

export const loginSuccess = (user: UserProps) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailed = (error: any) => {
  return { type: LOGIN_FAILED, payload: error };
};

export const clearMessage = () => {
  return { type: CLEAR_ERROR };
};

export const logout = () => {
  return { type: LOGOUT };
};
