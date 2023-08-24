import '../style/style.scss';
import logo from '../assets/images/logo.png';
import searchIcon from '../assets/icons/ic-search.svg';
import cartIcon from '../assets/icons/ic-cart.svg';
import personIcon from '../assets/icons/ic-person.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap d-flex jc-between">
          <img className="img header-logo" src={logo} alt="E-Shop" />
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
                    src={searchIcon}
                    alt="Search Icon"
                  />
                </a>
              </li>
              <li className="action-item">
                <a className="header-action-link" href="/#">
                  <img
                    className="icon action-icon"
                    src={cartIcon}
                    alt="Cart Icon"
                  />
                </a>
              </li>
              <li className="action-item">
                <a className="header-action-link" href="/#">
                  <img
                    className="icon action-icon"
                    src={personIcon}
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
