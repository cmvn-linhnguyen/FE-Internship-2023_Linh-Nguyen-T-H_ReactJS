import React, { useEffect } from 'react';

import CartEmpty from './components/CartEmpty';
import CartTable from './components/CartTable';
import CartSummary from './components/CartSummary';

import { CartComponentProps } from '../../../shared/models/interface';
import { saveDataToLocalStorage } from '../../../shared/utils';
import { StorageKey } from '../../../shared/constants';

const Cart = ({
  cartData,
  cartService,
  updateCartData,
}: CartComponentProps) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cartData);
  }, [cartData]);

  return (
    <main>
      <section className="section section-cart">
        <h3 className="cart-header">Shopping Cart</h3>
        <div className="container">
          <div className="row section-cart-content">
            <div className="col col-9">
              {cartData.length > 0 ? (
                <CartTable
                  cartData={cartData}
                  cartService={cartService}
                  updateCartData={updateCartData}
                />
              ) : (
                <CartEmpty />
              )}
            </div>
            <div className="col col-3">
              <CartSummary
                totalItems={cartData.length}
                totalPrice={cartService.calcTotalPrice(cartData)}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
