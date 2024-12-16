import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useToast } from '../../context/toast-context';
import './../../global.css';


const ToastNotification = () => {
  const { showToast, toastMessage, hideToastNotification } = useToast();

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast
        show={showToast}
        onClose={hideToastNotification}
        autohide
        delay={3000}
        className="custom-toast"
      >
        <Toast.Header>
          <strong className="me-auto">Notificação</strong>
          <small>Agora</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
