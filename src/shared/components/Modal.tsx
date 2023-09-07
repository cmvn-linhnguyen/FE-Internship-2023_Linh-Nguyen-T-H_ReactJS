import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CloseIcon from '../../assets/icons/ic-close.svg';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const dispatch = useDispatch();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, onClose]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <button className="close-button" onClick={onClose}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {children}
      </div>
    </div>
  );
};
