import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../../../shared/components';
import { ConfirmContent } from '../../../shared/components/ConfirmContent';
import { CartEmpty, CartSummary, CartTable } from './components';

import { CartService } from '../../../shared/services/cart-service';
import { StateProps } from '../../../redux/store';
import { toggleModal } from '../../../redux/actions/modal';
import { removeFromCart } from '../../../redux/actions/cart';

export const Cart = () => {
  const dispatch = useDispatch();

  const cartService = new CartService();

  const cart = useSelector((state: StateProps) => state.cart.cart);
  const isOpen = useSelector((state: StateProps) => state.modal.isOpen);

  const [idToDelete, setIdToDelete] = useState(-1);

  const updateIdToDelete = (id: number) => {
    setIdToDelete(id);
  };

  const deleteItem = () => {
    dispatch(removeFromCart(idToDelete));
    dispatch(toggleModal(false));
  };

  const handleModalClose = () => {
    dispatch(toggleModal(false));
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <section className="section section-cart">
        {isOpen && (
          <Modal onClose={handleModalClose}>
            <ConfirmContent
              title="Confirm deletion"
              message="Are you sure you want to delete this item?"
              labelAction="Delete"
              action={deleteItem}
            />
          </Modal>
        )}
        <h3 className="cart-header">Shopping Cart</h3>
        <div className="container">
          <div className="row section-cart-content">
            {cart.length > 0 ? (
              <>
                <div className="col col-9">
                  <CartTable updateIdToDelete={updateIdToDelete} />
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
