import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Footer, Login, Modal, Newsletter } from '../../../shared/components';
import {
  Advertisement,
  Banner,
  Recommendation,
  Benefits,
  ProductToday,
} from './components';

import { fetchProductsRequest } from '../../../redux/actions/product';
import { StateProps } from '../../../redux/store';
import { toggleModal } from '../../../redux/actions/modal';
import { getDataFromLocalStorage } from '../../../shared/utils';
import { StorageKeys } from '../../../shared/constants';

export const Home = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: StateProps) => state.modal.isOpen);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/cart') dispatch(toggleModal(true));
  }, [location.pathname, dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
    if (!getDataFromLocalStorage(StorageKeys.PRODUCTS).length)
      dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

  return (
    <div className="home-wrap">
      {isOpen && (
        <Modal>
          <Login />
        </Modal>
      )}
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
