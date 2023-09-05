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
import { fetchProductsRequest } from '../../../redux/actions/product';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

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
