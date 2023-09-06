import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Header } from './shared/components';
import { Cart, Home } from './app/pages';

import { StateProps } from './redux/store';
import { ModalContext } from './context';
import { saveDataToLocalStorage } from './shared/utils';
import { StorageKeys } from './shared/constants';

const App = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const isLogged = useSelector((state: StateProps) => state.auth.isLogged);
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
          {isLogged ? (
            <Route path="/cart" element={<Cart />} />
          ) : (
            <Route path="/cart" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;
