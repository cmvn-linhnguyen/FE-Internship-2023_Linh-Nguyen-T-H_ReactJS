import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CloseIcon from '../../assets/icons/ic-close.svg';

import { toggleModal } from '../../redux/actions/modal';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(toggleModal(false));
        if (location.pathname !== '/') navigate('/');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, navigate, location.pathname]);

  const handleClose = () => {
    dispatch(toggleModal(false));
    if (location.pathname !== '/') navigate('/');
  };

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <button className="close-button" onClick={handleClose}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {children}
      </div>
    </div>
  );
};
