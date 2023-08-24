import freeshipIcon from '../assets/icons/ic-free-shipping.svg';
import freeshipIconHover from '../assets/icons/ic-free-shipping-hover.svg';
import paymentIcon from '../assets/icons/ic-payment.svg';
import paymentIconHover from '../assets/icons/ic-payment-hover.svg';
import guaranteeIcon from '../assets/icons/ic-guarantee.svg';
import guaranteeIconHover from '../assets/icons/ic-guarantee-hover.svg';
import materialsIcon from '../assets/icons/ic-materials.svg';
import materialsIconHover from '../assets/icons/ic-materials-hover.svg';
import Service from './Service';

const services = [
  {
    icon: freeshipIcon,
    iconHover: freeshipIconHover,
    title: 'Free Shipping',
    desc: 'All purchases over $199 are eligible forfree shipping via USPSFirst className Mail.',
  },
  {
    icon: paymentIcon,
    iconHover: paymentIconHover,
    title: 'Easy Payments',
    desc: 'All payments are processed instantlyover a secure payment protocol.',
  },
  {
    icon: guaranteeIcon,
    iconHover: guaranteeIconHover,
    title: 'Money-Back Guarantee',
    desc: "If an item arrived damaged or you'vechanged your mind, you can send itback for a full refund.",
  },
  {
    icon: materialsIcon,
    iconHover: materialsIconHover,
    title: 'Finest Quality',
    desc: 'Designed to last, each of our products hasbeen crafted with the finest materials.',
  },
];

const ServiceList = () => {
  return (
    <section className="section section-service">
      <div className="container">
        <h3 className="section-header section-title section-title-center service-title">
          Why should you choose us?
        </h3>
        <ul className="service-list row">
          <li className="col col-3 col-sm-12 service-item">
            <Service {...services[0]} />
          </li>
          <li className="col col-3 col-sm-12 service-item">
            <Service {...services[1]} />
          </li>
          <li className="col col-3 col-sm-12 service-item">
            <Service {...services[2]} />
          </li>
          <li className="col col-3 col-sm-12 service-item">
            <Service {...services[3]} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceList;
