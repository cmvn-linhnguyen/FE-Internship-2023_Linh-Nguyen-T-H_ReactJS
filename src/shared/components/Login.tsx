import React, { useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/actions/auth';
import { StateProps } from '../../redux/store';
import { ModalContext } from '../../context';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: StateProps) => state.auth.isLoading);
  const error = useSelector((state: StateProps) => state.auth.error);
  const isLogged = useSelector((state: StateProps) => state.auth.isLogged);
  const { setIsOpen } = useContext(ModalContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [validateError, setValidateError] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (
      !validateError.email &&
      !validateError.password &&
      email !== '' &&
      password !== ''
    ) {
      dispatch(loginRequest({ email, password }) as any);
    }
  };

  const validateEmail = () => {
    const email = emailInputRef.current?.value;

    if (email === '' || email === null) {
      setValidateError((pre) => ({ ...pre, email: 'Email is required.' }));
    } else if (!email?.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)?.length) {
      setValidateError((pre) => ({
        ...pre,
        email: 'Email is not valid.',
      }));
    } else {
      setValidateError((pre) => ({
        ...pre,
        email: '',
      }));
    }
  };

  if (isLogged) setIsOpen(false);

  const validatePassword = () => {
    const password = passwordInputRef.current?.value;
    if (password === '') {
      setValidateError((pre) => ({
        ...pre,
        password: 'Password is required.',
      }));
    } else {
      setValidateError((pre) => ({
        ...pre,
        password: '',
      }));
    }
  };

  return (
    <div className="login-wrap">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <label className="login-label">Email</label>
        <input
          ref={emailInputRef}
          className="login-input"
          type="text"
          id="email"
          onBlur={validateEmail}
          placeholder="Enter your email"
        />
        {validateError.email && (
          <p className="text-error">{validateError.email}</p>
        )}
        <label className="login-label">Password</label>
        <input
          ref={passwordInputRef}
          className="login-input input-password"
          type="password"
          id="password"
          placeholder="Enter your password"
          onBlur={validatePassword}
        />
        {validateError.password && (
          <p className="text-error">{validateError.password}</p>
        )}
        <button
          disabled={isLoading}
          type="button"
          className="login-button"
          onClick={handleSubmit}
        >
          {isLoading ? 'Loading' : 'Login'}
        </button>
      </form>
      {error && <p className="text-error login-error">{error}</p>}
    </div>
  );
};

export default Login;
