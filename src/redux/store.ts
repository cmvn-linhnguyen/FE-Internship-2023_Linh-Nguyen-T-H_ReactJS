import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cart';
import { productsReducer } from './reducers/product';
import thunkMiddleware from 'redux-thunk';
import { loggerMiddleware } from './middleware';

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export type StateProps = ReturnType<typeof reducer>;

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
