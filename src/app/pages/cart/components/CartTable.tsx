import CartItem from './CartItem';

import {
  CartComponentProps,
  CartProps,
} from '../../../../shared/models/interface';

const CartTable = ({
  cartData,
  cartService,
  updateCartData,
}: CartComponentProps) => {
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
        {cartData.map((item: CartProps) => (
          <CartItem
            key={item.id}
            cart={item}
            cartData={cartData}
            cartService={cartService}
            updateCartData={updateCartData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
