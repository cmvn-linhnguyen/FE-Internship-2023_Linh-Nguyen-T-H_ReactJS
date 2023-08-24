import bannerIcon from '../assets/icons/ic-arrow.svg';
import freeShipIcon from '../assets/icons/ic-free-shipping-1.svg';
import happyIcon from '../assets/icons/ic-happy.svg';
import guaranteeIcon from '../assets/icons/ic-guarantee-1.svg';
import BannerService from './BannerService';

const services = [
  {
    icon: freeShipIcon,
    title: 'Free Shipping',
    desc: 'On purchases over $199',
  },
  {
    icon: happyIcon,
    title: '99% Satisfied Customers',
    desc: "Our clients' opinions speak for themselves",
  },
  {
    icon: guaranteeIcon,
    title: 'Originality Guaranteed',
    desc: '30 days warranty for each product from our store',
  },
];

const Banner = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="banner-wrap">
          <div className="banner-content">
            <h2 className="banner-title">
              Sale of the <span className="text-highlight">summer</span>{' '}
              collection
            </h2>
            <div className="banner-action d-flex ai-center">
              <div className="banner-icon-wrap d-flex jc-center ai-center">
                <img
                  className="icon banner-icon"
                  src={bannerIcon}
                  alt="Arrow Icon"
                />
              </div>
              <a className="banner-link" href="/#">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="banner-service">
            <ul className="service-list d-flex">
              <BannerService {...services[0]} />
              <BannerService {...services[1]} />
              <BannerService {...services[2]} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
