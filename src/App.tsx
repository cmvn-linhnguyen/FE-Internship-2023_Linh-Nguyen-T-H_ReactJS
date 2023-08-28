import { useCallback, useMemo, useState } from 'react';
import Cart from './app/pages/cart';
import Home from './app/pages/home';
import Header from './shared/components/Header';
import './stylesheet/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProps } from './shared/interface/interface';
import { getDataFromLocalStorage } from './shared/utils';
import { CartService } from './shared/services/CartService';

const App = () => {
  const [cartData, setCartData] = useState<CartProps[]>(
    getDataFromLocalStorage('cart')
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
