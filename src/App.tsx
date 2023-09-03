import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheet/style.scss';

import { Header } from './shared/components';
import Cart from './app/pages/cart';
import Home from './app/pages/home';
import { useSelector } from 'react-redux';
import { StateProps } from './redux/store';
import { useEffect } from 'react';
import { saveDataToLocalStorage } from './shared/utils';
import { StorageKeys } from './shared/constants';

const App = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);

  useEffect(() => {
    saveDataToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
