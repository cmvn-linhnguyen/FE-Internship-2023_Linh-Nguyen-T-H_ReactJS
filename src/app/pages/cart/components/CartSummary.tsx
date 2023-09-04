import { CartSummaryProps } from '../../../../shared/models/interface';

export const CartSummary = ({ totalItems, totalPrice }: CartSummaryProps) => {
  return (
    <div className="cart-summary">
      <div className="summary-header">
        <h4>Summary</h4>
        <p className="item-count">{totalItems} Items</p>
      </div>
      <div className="total-price-wrap">
        <p className="total-price-title">Total Price:</p>
        <p className="total-price">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
