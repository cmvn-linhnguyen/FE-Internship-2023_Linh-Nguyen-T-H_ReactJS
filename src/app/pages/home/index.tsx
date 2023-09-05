import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Footer, Newsletter } from '../../../shared/components';
import {
  Advertisement,
  Banner,
  Recommendation,
  Benefits,
  ProductToday,
} from './components';

import { fetchProductsRequest } from '../../../redux/actions/productAction';
import { getDataFromLocalStorage } from '../../../shared/utils';
import { StorageKeys } from '../../../shared/constants';

const Home = () => {
  const dispatch = useDispatch();

  if (!getDataFromLocalStorage(StorageKeys.PRODUCTS).length)
    dispatch(fetchProductsRequest() as any);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Advertisement />
      <Recommendation />
      <Benefits />
      <ProductToday />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
