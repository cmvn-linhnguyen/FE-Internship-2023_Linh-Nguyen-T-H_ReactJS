import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { CartService } from '../services/cart-service';
import { StateProps } from '../../redux/store';
import { logout } from '../../redux/actions/auth';
import { toggleModal } from '../../redux/actions/modal';

export const Header = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const cartService = new CartService();
  const user = useSelector((state: StateProps) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAction = () => {
    if (user) {
      dispatch(logout());
    } else {
      dispatch(toggleModal(true));
    }
  };

  const handleNavigate = () => {
    if (user) {
      navigate('/cart');
    } else {
      dispatch(toggleModal(true));
    }
  };

  return (
    <header
      className={`header ${
        location.pathname === '/cart' || scrolled ? 'header-cart' : ''
      }`}
    >
      <div className="container">
        <div className="header-wrap d-flex jc-between">
          <Link to="/">
            <img
              className="img header-logo"
              src={require('../../assets/images/logo.png')}
              alt="E-Shop"
            />
          </Link>
          <nav className="d-flex ai-center hidden-sm">
            <ul className="nav-list d-flex">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Woman
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Kids
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-action d-flex ai-center">
            <ul className="action-list d-flex ai-center">
              <li className="action-item">
                <a className="header-action-link" href="/#">
                  <img
                    className="icon action-icon"
                    src={require('../../assets/icons/ic-search.svg').default}
                    alt="Search Icon"
                  />
                </a>
              </li>
              <li className="action-item">
                <Link
                  to={user ? '/cart' : '#'}
                  className="header-action-link"
                  onClick={handleNavigate}
                >
                  <img
                    className="icon action-icon"
                    src={require('../../assets/icons/ic-cart.svg').default}
                    alt="Cart Icon"
                  />
                  {cartService.getQuantity(cart) > 0 && user && (
                    <span className="cart-item-count">
                      {cartService.getQuantity(cart)}
                    </span>
                  )}
                </Link>
              </li>
              <li className="action-item">
                <button className="header-action-link" onClick={handleAction}>
                  {user ? 'Logout' : 'Login'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
