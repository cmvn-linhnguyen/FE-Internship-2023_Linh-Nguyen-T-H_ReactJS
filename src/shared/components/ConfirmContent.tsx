import React from 'react';

interface ConfirmProps {
  title: string;
  message: string;
  labelAction: string;
  action: () => void;
}

export const ConfirmContent = ({
  title,
  message,
  labelAction,
  action,
}: ConfirmProps) => {
  return (
    <div className="confirm-wrap">
      <h2 className="confirm-title">{title}</h2>
      <p className="confirm-message">{message}</p>
      <div className="d-flex jc-end">
        <button className="confirm-button" onClick={action}>
          {labelAction}
        </button>
      </div>
    </div>
  );
};
