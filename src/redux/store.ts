import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { productsReducer } from './reducers/productReducer';
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
