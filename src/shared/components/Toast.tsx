import React, { useEffect } from 'react';

import { ToastTypes } from '../constants';
import CloseIcon from '../../assets/icons/ic-close.svg';

interface ToastProps {
  type: ToastTypes;
  title: string;
  desc: string;
  onClose: () => void;
}

const Toast = ({ type, title, desc, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <button onClick={onClose}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <div>
        <p className="toast-title">{title}</p>
        <p className="toast-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Toast;
