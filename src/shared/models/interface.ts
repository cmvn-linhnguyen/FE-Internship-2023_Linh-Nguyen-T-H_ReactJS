import { Status } from '../constants';

export interface AdvertisementItemProps {
  image: string;
  title: string;
  buttonLabel: string;
  discount?: number;
}

export interface BannerItemProps {
  icon: string;
  title: string;
  desc: string;
}

export interface BenefitsItemProps {
  icon: string;
  iconHover: string;
  title: string;
  desc: string;
}

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: Status;
}

export interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export interface CartComponentProps {
  cart: CartItemProps[];
  updateCart: (newCart: CartItemProps[]) => void;
}

export interface ProductComponentProps {
  updateCart: (newCart: CartItemProps[]) => void;
}

export interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export interface UserProps {
  email: string;
  password: string;
}
