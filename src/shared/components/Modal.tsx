import React, { useContext } from 'react';

import CloseIcon from '../../assets/icons/ic-close.svg';
import { ModalContext } from '../../context';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div className={`modal-overlay ${isOpen ? 'display' : null}`}>
      <div className="modal">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          <img src={CloseIcon} alt="CLose Icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
