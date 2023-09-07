import { useEffect } from 'react';
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
import { saveDataToLocalStorage } from './shared/utils';
import { StorageKeys } from './shared/constants';

const App = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const user = useSelector((state: StateProps) => state.auth.user);

  useEffect(() => {
    saveDataToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {user ? (
          <Route path="/cart" element={<Cart />} />
        ) : (
          <Route path="/cart" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
