import React, { useEffect } from 'react';
import { CartComponentProps } from '../../../shared/interface/interface';
import { CART_ACTION } from '../../../shared/constants';
import {
  calcCartPrice,
  calcProductPrice,
  saveDataToLocalStorage,
} from '../../../shared/utils';
import { Link } from 'react-router-dom';

const Cart = ({
  cartData,
  cartService,
  updateCartData,
}: CartComponentProps) => {
  useEffect(() => {
    saveDataToLocalStorage('cart', cartData);
  }, [cartData]);

  const handleDelete = (id: number): void => {
    updateCartData(cartService.deleteCart(cartData, id));
  };

  const updateQuantity = (
    id: number,
    action: CART_ACTION.Decrease | CART_ACTION.Increase
  ): void => {
    updateCartData(cartService.updateCart(cartData, id, action));
  };

  return (
    <main>
      <section className="section section-cart">
        <h3 className="cart-header">Shopping Cart</h3>
        <div className="container">
          <div className="row section-cart-content">
            <div className="col col-9">
              {cartData.length > 0 ? (
                <table className="cart-table">
                  <thead>
                    <tr className="table-header">
                      <th className="col col-3">Image</th>
                      <th className="col col-3">Name</th>
                      <th className="col col-2">Price</th>
                      <th className="col col-2">Quantity</th>
                      <th className="col col-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((item) => (
                      <tr className="table-row" key={item.id}>
                        <td className="col col-3">
                          <img
                            className="cart-item-img"
                            src={item.image}
                            alt={item.name}
                          />
                        </td>
                        <td className="col col-3">{item.name}</td>
                        <td className="col col-2">
                          <div className="price-wrap">
                            {item.discount ? (
                              <div className="discount">
                                <p className="discountedPrice">
                                  ${calcProductPrice(item).toFixed(2)}
                                </p>
                                <p className="originalPrice">${item.price}</p>
                              </div>
                            ) : (
                              <p>${item.price.toFixed(2)}</p>
                            )}
                            <p className="item-price">
                              Total: ${calcCartPrice(item).toFixed(2)}
                            </p>
                          </div>
                        </td>
                        <td className="col col-2">
                          <div className="quantity-wrap d-flex ai-center">
                            <button
                              className={`quantity-update decrease pro-${item.id}`}
                              disabled={item.quantity === 1}
                              onClick={() =>
                                updateQuantity(item.id, CART_ACTION.Decrease)
                              }
                            >
                              -
                            </button>
                            <p className="item-quantity">{item.quantity}</p>
                            <button
                              className={`quantity-update increase pro-${item.id}`}
                              onClick={() =>
                                updateQuantity(item.id, CART_ACTION.Increase)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="col col-2">
                          <button
                            className="delete-button"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="empty-wrap d-flex fd-column ai-center jc-center">
                  <img
                    className="empty-image"
                    src={require('../../../assets/images/empty.png')}
                    alt="Empty Cart"
                  />
                  <p className="empty-message">Your cart is empty.</p>
                  <Link
                    to="/"
                    className="btn btn-outline continue-shopping-link"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
            <div className="col col-3">
              <div className="cart-summary">
                <div className="summary-header">
                  <h4>Summary</h4>
                  <p className="item-count">{cartData.length} Items</p>
                </div>
                <div className="total-price-wrap">
                  <p className="total-price-title">Total Price:</p>
                  <p className="total-price">
                    ${cartService.calcTotalPrice(cartData).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
