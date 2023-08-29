import { Link } from 'react-router-dom';
import emptyImage from '../../../../assets/images/empty.png';

export const CartEmpty = () => {
  return (
    <div className="empty-wrap d-flex fd-column ai-center jc-center">
      <img className="empty-image" src={emptyImage} alt="Empty Cart" />
      <p className="empty-message">Your cart is empty.</p>
      <Link to="/" className="btn btn-outline continue-shopping-link">
        Continue Shopping
      </Link>
    </div>
  );
};
