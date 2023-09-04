import React, { useEffect } from 'react';

import { CartEmpty, CartSummary, CartTable } from './components';

import { CartComponentProps } from '../../../shared/models/interface';
import { CartService } from '../../../shared/services/cart-service';

const Cart = ({ cart, updateCart }: CartComponentProps) => {
  const cartService = new CartService();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <section className="section section-cart">
        <h3 className="cart-header">Shopping Cart</h3>
        <div className="container">
          <div className="row section-cart-content">
            {cart.length > 0 ? (
              <>
                <div className="col col-9">
                  <CartTable cart={cart} updateCart={updateCart} />
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

export default Cart;
