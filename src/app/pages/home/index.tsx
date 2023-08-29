import React, { useEffect } from 'react';

import { Footer, Newsletter } from '../../../shared/components';

import { ProductComponentProps } from '../../../shared/models/interface';
import { Advertisement, Banner } from './components';
import { Recommendation } from './components/Recommendation';
import { Benefits } from './components/benefits/Benefits';
import { ProductToday } from './components/ProductToday';

const Home = React.memo(({ updateCart }: ProductComponentProps) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Advertisement />
      <Recommendation updateCart={updateCart} />
      <Benefits />
      <ProductToday updateCart={updateCart} />
      <Newsletter />
      <Footer />
    </>
  );
});

export default Home;
