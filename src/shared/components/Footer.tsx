const Footer = () => {
  return (
    <footer className="footer">
      <section className="section section-shopinfor">
        <div className="container">
          <div className="row">
            <div className="col col-6 col-sm-12">
              <h2 className="logo">
                <a className="logo-link" href="/#">
                  <img
                    className="logo-image"
                    src={require('../../assets/images/logo.png')}
                    alt="E-shop"
                  />
                </a>
              </h2>
              <p className="shopinfor-desc">
                House My Brand designs clothing for the young, the old &everyone
                in between – but most importantly, for the fashionable
              </p>
              <ul className="social-list d-flex">
                <li className="social-item">
                  <a href="social-item-link">
                    <img
                      className="social-icon"
                      src={
                        require('../../assets/icons/ic-facebook.svg').default
                      }
                      alt="Facebook Icon"
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a href="social-item-link">
                    <img
                      className="social-icon"
                      src={require('../../assets/icons/ic-twitter.svg').default}
                      alt="Twitter Icon"
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a href="social-item-link">
                    <img
                      className="social-icon"
                      src={
                        require('../../assets/icons/ic-linkedin.svg').default
                      }
                      alt="Linkedin Icon"
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a href="social-item-link">
                    <img
                      className="social-icon"
                      src={
                        require('../../assets/icons/ic-instagram.svg').default
                      }
                      alt="Instagram Icon"
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a href="social-item-link">
                    <img
                      className="social-icon"
                      src={require('../../assets/icons/ic-youtube.svg').default}
                      alt="Youtube Icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="grid-list col col-6 col-sm-12 row">
              <li className="grid-item col-4 col-sm-12">
                <p className="grid-item-title">Shopping online</p>
                <ul className="links-list">
                  <li className="links-item">
                    <a className="link" href="/#">
                      Order Status
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      {' '}
                      Shipping and Delivery
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Returns
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Payment Options
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="grid-item col-4 col-sm-12">
                <p className="grid-item-title">Information</p>
                <ul className="links-list">
                  <li className="links-item">
                    <a className="link" href="/#">
                      Gift Cards
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Find a store
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Newsletter
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Become a member
                    </a>
                  </li>
                  <li className="links-item">
                    <a className="link" href="/#">
                      Site feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className="grid-item col-4 col-sm-12">
                <p className="grid-item-title">Contact</p>
                <ul className="links-list">
                  <li className="links-item">store@uikit.com</li>
                  <li className="links-item">Hotline: +1 131 138 138</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-copyright">
        <div className="container">
          <div className="copyright d-flex jc-center ai-center">
            <p className="copyright-text">@SUPREMETECH 2021</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
