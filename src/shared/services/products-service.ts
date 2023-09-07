import { ProductProps } from '../models/interface';

export const fetchProducts = () => {
  return new Promise<ProductProps[]>((resolve, reject) => {
    try {
      setTimeout(async () => {
        const response = await fetch(
          'products.json' + ['', '*', ''][Math.floor(Math.random() * 3)]
        );
        const data = await response.json();
        resolve(data);
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
};
