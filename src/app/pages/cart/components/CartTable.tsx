import { CartComponentProps } from '../../../../shared/models/interface';
import { CartItem } from '../components';

export const CartTable = ({ cart, updateCart }: CartComponentProps) => {
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
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            cart={cart}
            updateCart={updateCart}
          />
        ))}
      </tbody>
    </table>
  );
};
