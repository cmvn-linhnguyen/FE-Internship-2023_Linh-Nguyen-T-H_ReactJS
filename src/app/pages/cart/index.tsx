import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CartEmpty, CartSummary, CartTable } from './components';

import { CartService } from '../../../shared/services/cart-service';
import { StateProps } from '../../../redux/store';
import { Modal } from '../../../shared/components';

export const Cart = () => {
  const cartService = new CartService();
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const isOpen = useSelector((state: StateProps) => state.modal.isOpen);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <section className="section section-cart">
        {isOpen && (
          <Modal>
            <p>aaaaaa</p>
          </Modal>
        )}
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
