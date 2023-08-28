import { STATUS } from '../constants';
import { CartService } from '../services/cart-service';

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
  status: STATUS;
}

export interface CartProps extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export interface CartComponentProps {
  cartData: CartProps[];
  cartService: CartService;
  updateCartData: (newCartData: CartProps[]) => void;
}

export interface ProductComponentProps {
  cartService: CartService;
  updateCartData: (newCartData: CartProps[]) => void;
}

export interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}
