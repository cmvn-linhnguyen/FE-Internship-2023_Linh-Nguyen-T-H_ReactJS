import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { StateProps } from '../../../redux/store';
import { ToastTypes } from '../../../shared/constants';
import { clearMessage } from '../../../redux/actions/auth';
import Toast from '../../../shared/components/Toast';
import { toggleModal } from '../../../redux/actions/modal';

export const Home = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: StateProps) => state.auth.error);
  const successMessage = useSelector(
    (state: StateProps) => state.auth.successMessage
  );
  const isOpen = useSelector((state: StateProps) => state.modal.isOpen);
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({
    title: '',
    desc: '',
    type: ToastTypes.SUCCESS,
  });

  const showCustomToast = (title: string, desc: string, type: ToastTypes) => {
    setShowToast(true);
    setToast({ title, desc, type });
  };

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showCustomToast('Error', error, ToastTypes.FAILED);
      dispatch(clearMessage());
    } else if (successMessage) {
      showCustomToast('Success', successMessage, ToastTypes.SUCCESS);
      dispatch(toggleModal(false));
      dispatch(clearMessage());
    }
  }, [error, successMessage, dispatch]);

  return (
    <div className="home-wrap">
      {isOpen && (
        <Modal>
          <Login />
        </Modal>
      )}
      {showToast && (
        <Toast
          type={toast.type}
          title={toast.title}
          desc={toast.desc}
          onClose={() => setShowToast(false)}
        />
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
