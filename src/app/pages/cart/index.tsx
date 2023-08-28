import React, { useEffect } from 'react';

import CartEmpty from './components/CartEmpty';
import CartTable from './components/CartTable';
import CartSummary from './components/CartSummary';

import { CartComponentProps } from '../../../shared/models/interface';
import { LOCAL_STORAGE_KEY } from '../../../shared/constants';
import { saveDataToLocalStorage } from '../../../shared/utils';

const Cart = ({
  cartData,
  cartService,
  updateCartData,
}: CartComponentProps) => {
  useEffect(() => {
    saveDataToLocalStorage(LOCAL_STORAGE_KEY.Cart, cartData);
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
                totalItems={cartService.getQuantity(cartData)}
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
