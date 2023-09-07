import React, { useRef, useEffect } from 'react';

import CloseIcon from '../../assets/icons/ic-close.svg';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/modal';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(toggleModal(false));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <button
          className="close-button"
          onClick={() => dispatch(toggleModal(false))}
        >
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
