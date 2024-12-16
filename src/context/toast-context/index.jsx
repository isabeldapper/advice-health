import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const hideToastNotification = () => {
    setShowToast(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, toastMessage, showToastNotification, hideToastNotification }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
