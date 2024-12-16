import React, { createContext, useContext, useState } from 'react';
import ActionModal from '../../components/action-modal';

const ActionModalContext = createContext();

export const ActionModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    show: false,
    title: '',
    message: '',
    confirmText: 'Confirmar',
    cancelText: 'Cancelar',
    actionType: 'default',
    onConfirm: () => {},
    children: null,
  });

  const openModal = (config) => {
    setModalConfig({
      ...modalConfig,
      show: true,
      ...config,
    });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, show: false }));
  };

  return (
    <ActionModalContext.Provider value={{ openModal, closeModal }}>
      <ActionModal
        show={modalConfig.show}
        onHide={closeModal}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        cancelText={modalConfig.cancelText}
        actionType={modalConfig.actionType}
        children={modalConfig.children}
        onConfirm={() => {
          modalConfig.onConfirm();
          closeModal();
        }}
      />
      {children}
    </ActionModalContext.Provider>
  );
};

export const useActionModal = () => useContext(ActionModalContext);
