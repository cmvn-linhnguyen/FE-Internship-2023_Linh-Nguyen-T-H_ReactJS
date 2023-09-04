import { Status } from '../constants';
import {
  AdvertisementItemProps,
  BannerItemProps,
  BenefitsItemProps,
  ProductProps,
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
    desc: 'All purchases over $199 are eligible forfree shipping via USPSFirst className Mail.',
  },
  {
    icon: require('../../assets/icons/ic-payment.svg').default,
    iconHover: require('../../assets/icons/ic-payment-hover.svg').default,
    title: 'Easy Payments',
    desc: 'All payments are processed instantlyover a secure payment protocol.',
  },
  {
    icon: require('../../assets/icons/ic-guarantee.svg').default,
    iconHover: require('../../assets/icons/ic-guarantee-hover.svg').default,
    title: 'Money-Back Guarantee',
    desc: "If an item arrived damaged or you'vechanged your mind, you can send itback for a full refund.",
  },
  {
    icon: require('../../assets/icons/ic-materials.svg').default,
    iconHover: require('../../assets/icons/ic-materials-hover.svg').default,
    title: 'Finest Quality',
    desc: 'Designed to last, each of our products hasbeen crafted with the finest materials.',
  },
];

export const imagePaths = {
  product1: require('../../assets/images/product-1.png').default,
};

export const products: ProductProps[] = [
  {
    id: 1,
    image: require('../../assets/images/product-1.png'),
    name: 'T-Shirt Summer Vibes',
    price: 119.99,
    discount: 30,
    status: Status.AVAILABLE,
  },
  {
    id: 2,
    image: require('../../assets/images/product-2.png'),
    name: 'Loose Knit 3/4 Sleeve',
    price: 119.99,
    discount: 0,
    status: Status.AVAILABLE,
  },
  {
    id: 3,
    image: require('../../assets/images/product-3.png'),
    name: 'Basic Slim Fit T-Shirt',
    price: 79.99,
    discount: 0,
    status: Status.OUT_OF_STOCK,
  },
  {
    id: 4,
    image: require('../../assets/images/product-4.png'),
    name: 'Loose Textured T-Shirt',
    price: 119.99,
    discount: 0,
    status: Status.AVAILABLE,
  },
  {
    id: 5,
    image: require('../../assets/images/product-4.png'),
    name: 'Product 1',
    price: 99.99,
    discount: 15,
    status: Status.OUT_OF_STOCK,
  },
  {
    id: 6,
    image: require('../../assets/images/product-1.png'),
    name: 'Product 2',
    price: 149.99,
    discount: 10,
    status: Status.AVAILABLE,
  },
  {
    id: 7,
    image: require('../../assets/images/product-2.png'),
    name: 'Product 3',
    price: 89.99,
    discount: 5,
    status: Status.AVAILABLE,
  },
  {
    id: 8,
    image: require('../../assets/images/product-3.png'),
    name: 'Product 4',
    price: 109.99,
    discount: 0,
    status: Status.AVAILABLE,
  },
];
