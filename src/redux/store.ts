import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cart';
import { productsReducer } from './reducers/product';
import thunkMiddleware from 'redux-thunk';
import { loggerMiddleware } from './middleware';
import { authReducer } from './reducers/auth';

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
});

export type StateProps = ReturnType<typeof reducer>;

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
