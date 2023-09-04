import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheet/style.scss';

import { Header } from './shared/components';
import Cart from './app/pages/cart';
import Home from './app/pages/home';

import { CartItemProps } from './shared/models/interface';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from './shared/utils';
import { CartService } from './shared/services/cart-service';
import { StorageKeys } from './shared/constants';

const App = () => {
  const [cart, setCart] = useState<CartItemProps[]>(
    getDataFromLocalStorage(StorageKeys.CART)
  );

  const updateCart = useCallback((newCart: CartItemProps[]) => {
    setCart(newCart);
  }, []);

  useEffect(() => {
    saveDataToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  return (
    <Router>
      <Header cartQuantity={new CartService().getQuantity(cart)} />
      <Routes>
        <Route path="/" element={<Home updateCart={updateCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={updateCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
