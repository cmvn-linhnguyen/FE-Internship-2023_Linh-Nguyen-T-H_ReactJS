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

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

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
