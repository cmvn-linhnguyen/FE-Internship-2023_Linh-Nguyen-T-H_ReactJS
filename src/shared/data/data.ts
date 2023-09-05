import {
  AdvertisementItemProps,
  BannerItemProps,
  BenefitsItemProps,
} from '../models/interface';

export const advertisements: AdvertisementItemProps[] = [
  {
    image: require('../../assets/images/advertisements1.png'),
    title: 'New arrivals are now in!',
    buttonLabel: 'SHOW COLLECTION',
  },
  {
    image: require('../../assets/images/advertisements2.png'),
    title: 'Basic t-shirts',
    buttonLabel: 'MORE DETAILS',
  },
  {
    image: require('../../assets/images/advertisements3.png'),
    title: 'Sale this summer',
    buttonLabel: 'MORE DETAILS',
    discount: 50,
  },
];

export const bannerItems: BannerItemProps[] = [
  {
    icon: require('../../assets/icons/ic-free-shipping-1.svg').default,
    title: 'Free Shipping',
    desc: 'On purchases over $199',
  },
  {
    icon: require('../../assets/icons/ic-happy.svg').default,
    title: '99% Satisfied Customers',
    desc: "Our clients' opinions speak for themselves",
  },
  {
    icon: require('../../assets/icons/ic-guarantee-1.svg').default,
    title: 'Originality Guaranteed',
    desc: '30 days warranty for each product from our store',
  },
];

export const benefits: BenefitsItemProps[] = [
  {
    icon: require('../../assets/icons/ic-free-shipping.svg').default,
    iconHover: require('../../assets/icons/ic-free-shipping-hover.svg').default,
    title: 'Free Shipping',
    desc: 'All purchases over $199 are eligible for free shipping via USPSFirst className Mail.',
  },
  {
    icon: require('../../assets/icons/ic-payment.svg').default,
    iconHover: require('../../assets/icons/ic-payment-hover.svg').default,
    title: 'Easy Payments',
    desc: 'All payments are processed instantly over a secure payment protocol.',
  },
  {
    icon: require('../../assets/icons/ic-guarantee.svg').default,
    iconHover: require('../../assets/icons/ic-guarantee-hover.svg').default,
    title: 'Money-Back Guarantee',
    desc: "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
  },
  {
    icon: require('../../assets/icons/ic-materials.svg').default,
    iconHover: require('../../assets/icons/ic-materials-hover.svg').default,
    title: 'Finest Quality',
    desc: 'Designed to last, each of our products has been crafted with the finest materials.',
  },
];
