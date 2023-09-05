import { useSelector } from 'react-redux';

import { CartItem } from '../components';

import { StateProps } from '../../../../redux/store';

export const CartTable = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);

  return (
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
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </tbody>
    </table>
  );
};
