import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheet/style.scss';

import { Header } from './shared/components';
import Cart from './app/pages/cart';
import Home from './app/pages/home';
import { StateProps } from './redux/store';
import { saveDataToLocalStorage } from './shared/utils';
import { StorageKeys } from './shared/constants';
import { ModalContext } from './context';

const App = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    saveDataToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;
