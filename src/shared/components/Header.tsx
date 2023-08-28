import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
}

const Header = ({ cartItemCount }: HeaderProps) => {
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

  return (
    <header
      className={`header ${
        location.pathname === '/cart' || scrolled ? 'header-cart' : null
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
          <nav className="d-flex ai-center">
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
                <Link className="header-action-link" to="/cart">
                  <img
                    className="icon action-icon"
                    src={require('../../assets/icons/ic-cart.svg').default}
                    alt="Cart Icon"
                  />
                  {cartItemCount > 0 && (
                    <span className="cart-item-count">{cartItemCount}</span>
                  )}
                </Link>
              </li>
              <li className="action-item">
                <a className="header-action-link" href="/#">
                  <img
                    className="icon action-icon"
                    src={require('../../assets/icons/ic-person.svg').default}
                    alt="Person Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
