import React from 'react';

import Footer from '../../../shared/components/Footer';
import Newsletter from '../../../shared/components/Newsletter';
import ProductToday from './components/ProductToday';
import Recommendation from './components/Recommendation';
import Advertisement from './components/advertisement/Advertisement';
import Banner from './components/banner/Banner';
import Benefits from './components/benefits/Benefits';

import { ProductComponentProps } from '../../../shared/models/interface';

const Home = React.memo((props: ProductComponentProps) => {
  return (
    <>
      <Banner />
      <Advertisement />
      <Recommendation
        cartService={props.cartService}
        updateCartData={props.updateCartData}
      />
      <Benefits />
      <ProductToday
        cartService={props.cartService}
        updateCartData={props.updateCartData}
      />
      <Newsletter />
      <Footer />
    </>
  );
});

export default Home;
