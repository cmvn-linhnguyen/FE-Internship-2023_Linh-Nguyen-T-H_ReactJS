import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="empty-wrap d-flex fd-column ai-center jc-center">
      <img
        className="empty-image"
        src={require('../../../../assets/images/empty.png')}
        alt="Empty Cart"
      />
      <p className="empty-message">Your cart is empty.</p>
      <Link to="/" className="btn btn-outline continue-shopping-link">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;
