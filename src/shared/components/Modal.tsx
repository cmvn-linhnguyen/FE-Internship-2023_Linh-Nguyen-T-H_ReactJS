import React, { useContext, useRef, useEffect } from 'react';

import CloseIcon from '../../assets/icons/ic-close.svg';
import { ModalContext } from '../../context';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { setIsOpen } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
