import { STATUS } from '../constants';
import { CartService } from '../services/CartService';

export interface AdvertisementItemProps {
  image: string;
  title: string;
  buttonTitle: string;
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
  status: STATUS.Available | STATUS.Out_of_stock;
}

export interface CartProps extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export interface ProductComponentProps {
  cartService: CartService;
  updateCartData: (newCartData: CartProps[]) => void;
}

export interface CartComponentProps {
  cartData: CartProps[];
  cartService: CartService;
  updateCartData: (newCartData: CartProps[]) => void;
}
