import { useContext, useEffect, useState } from 'react';
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
import { ModalContext } from '../../../context';
import { ToastTypes } from '../../../shared/constants';
import { clearError } from '../../../redux/actions/auth';
import Toast from '../../../shared/components/Toast';

export const Home = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: StateProps) => state.auth.error);
  const isLogged = useSelector((state: StateProps) => state.auth.isLogged);
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({
    title: '',
    desc: '',
    type: ToastTypes.SUCCESS,
  });
  const { isOpen, setIsOpen } = useContext(ModalContext);

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
      showCustomToast(
        'Error',
        'Login failed. Please check your email and password.',
        ToastTypes.FAILED
      );
      dispatch(clearError());
    } else if (isLogged) {
      showCustomToast('Success', 'Login successful!', ToastTypes.SUCCESS);
      setIsOpen(false);
    }
  }, [error, isLogged, dispatch, setIsOpen]);

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
