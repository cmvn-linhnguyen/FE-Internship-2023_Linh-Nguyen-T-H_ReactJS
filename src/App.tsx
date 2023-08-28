import { useCallback, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheet/style.scss';

import Cart from './app/pages/cart';
import Home from './app/pages/home';
import Header from './shared/components/Header';

import { CartProps } from './shared/models/interface';
import { getDataFromLocalStorage } from './shared/utils';
import { CartService } from './shared/services/cart-service';
import { LOCAL_STORAGE_KEY } from './shared/constants';

const App = () => {
  const [cartData, setCartData] = useState<CartProps[]>(
    getDataFromLocalStorage(LOCAL_STORAGE_KEY.Cart)
  );

  const cartService = useMemo(() => new CartService(), []);

  const updateCartData = useCallback((newCartData: CartProps[]) => {
    setCartData([...newCartData]);
  }, []);

  return (
    <Router>
      <Header cartItemCount={cartService.getQuantity(cartData)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home cartService={cartService} updateCartData={updateCartData} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartData={cartData}
              cartService={cartService}
              updateCartData={updateCartData}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
