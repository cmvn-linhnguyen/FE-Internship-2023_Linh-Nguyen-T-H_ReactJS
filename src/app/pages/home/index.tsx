import { useEffect } from 'react';
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
import Modal from '../../../shared/components/Modal';
import Login from '../../../shared/components/Login';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

  return (
    <div className="home-wrap">
      <Modal>
        <Login />
      </Modal>
      <Banner />
      <Advertisement />
      <Recommendation />
      <Benefits />
      <ProductToday />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
