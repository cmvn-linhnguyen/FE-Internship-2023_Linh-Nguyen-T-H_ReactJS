import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CartEmpty, CartSummary, CartTable } from './components';

import { CartService } from '../../../shared/services/cart-service';
import { StateProps } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const cartService = new CartService();
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const navigate = useNavigate();
  const isLogged = useSelector((state: StateProps) => state.auth.isLogged);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  return (
    <main>
      <section className="section section-cart">
        <h3 className="cart-header">Shopping Cart</h3>
        <div className="container">
          <div className="row section-cart-content">
            {cart.length > 0 ? (
              <>
                <div className="col col-9">
                  <CartTable />
                </div>
                <div className="col col-3">
                  <CartSummary
                    totalItems={cart.length}
                    totalPrice={cartService.calcTotalPrice(cart)}
                  />
                </div>
              </>
            ) : (
              <div className="col col-12">
                <CartEmpty />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
