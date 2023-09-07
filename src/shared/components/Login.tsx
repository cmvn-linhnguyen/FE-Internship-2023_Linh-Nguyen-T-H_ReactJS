import { useDispatch, useSelector } from 'react-redux';

import useForm from '../../custom-hook/useForm';
import { loginRequest } from '../../redux/actions/auth';
import { StateProps } from '../../redux/store';

export const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: StateProps) => state.auth.isLoading);

  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    dispatch(loginRequest(values) as any);
  }

  return (
    <div className="login-wrap">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">Email</label>
        <input
          className="login-input"
          type="text"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <div className="text-error">{errors.email}</div>}
        <label className="login-label">Password</label>
        <input
          className="login-input input-password"
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <div className="text-error">{errors.password}</div>}
        <button disabled={isLoading} type="submit" className="login-button">
          {isLoading ? 'Loading' : 'Login'}
        </button>
      </form>
    </div>
  );
};
