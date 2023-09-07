import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Toast } from './shared/components';
import { Cart, Home } from './app/pages';

import { saveDataToLocalStorage } from './shared/utils';
import { StorageKeys, ToastTypes } from './shared/constants';
import { StateProps } from './redux/store';
import { clearMessage } from './redux/actions/auth';
import { toggleModal } from './redux/actions/modal';

const App = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: StateProps) => state.cart.cart);
  const user = useSelector((state: StateProps) => state.auth.user);
  const error = useSelector((state: StateProps) => state.auth.error);
  const successMessage = useSelector(
    (state: StateProps) => state.auth.successMessage
  );

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
    saveDataToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

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
    <Router>
      {showToast && (
        <Toast
          type={toast.type}
          title={toast.title}
          desc={toast.desc}
          onClose={() => setShowToast(false)}
        />
      )}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {user ? (
          <Route path="/cart" element={<Cart />} />
        ) : (
          <Route path="/cart" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
