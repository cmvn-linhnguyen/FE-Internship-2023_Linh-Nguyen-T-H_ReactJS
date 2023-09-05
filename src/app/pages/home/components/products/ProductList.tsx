import { Product } from './Product';

import { ProductProps } from '../../../../../shared/models/interface';

import ErrorIcon from '../../../../../assets/icons/ic-error.svg';
import RefreshIcon from '../../../../../assets/icons/ic-refresh.svg';
import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../../../../../redux/actions/product';

interface ProductListProps {
  products: ProductProps[];
  isLoading: boolean;
  error: any;
}

export const ProductList = ({
  products,
  isLoading,
  error,
}: ProductListProps) => {
  const dispatch = useDispatch();

  const handleRefreshData = () => {
    dispatch(fetchProductsRequest() as any);
  };

  return (
    <ul className="product-list row">
      {isLoading ? (
        [1, 2, 3, 4].map((item, index) => (
          <li key={index} className="col col-3 col-sm-6">
            <div className="skeleton-loader" />
            <div className="skeleton-loader text-loader name-loader" />
            <div className="skeleton-loader text-loader price-loader" />
          </li>
        ))
      ) : error ? (
        <div className="col col-12 d-flex fd-column ai-center jc-center">
          <img
            className="error-image"
            src={ErrorIcon}
            alt="Something went wrong!"
          />
          <p className="error-title">Oops! Some thing went wrong!</p>
          <button
            className="btn btn-refresh d-flex ai-center"
            onClick={handleRefreshData}
          >
            <img
              className="refresh-icon"
              src={RefreshIcon}
              alt="Refresh Icon"
            />
            Refresh
          </button>
        </div>
      ) : (
        products.map((product: ProductProps) => (
          <li key={product.id} className="col col-3 col-sm-6">
            <Product product={product} />
          </li>
        ))
      )}
    </ul>
  );
};
