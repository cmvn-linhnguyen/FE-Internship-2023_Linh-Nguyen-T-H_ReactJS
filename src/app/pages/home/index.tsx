import React from 'react';
import Footer from '../../../shared/components/Footer';
import Newsletter from '../../../shared/components/Newsletter';
import ProductToday from './ProductToday';
import Recommendation from './Recommendation';
import Advertisement from './advertisement/Advertisement';
import Banner from './banner/Banner';
import Benefits from './benefits/Benefits';
import { ProductComponentProps } from '../../../shared/interface/interface';

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
