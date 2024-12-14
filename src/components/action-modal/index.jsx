import React from 'react';
import { Modal, Button } from 'react-bootstrap';

	/*
	show: Controla a visibilidade da modal.
	onHide: Função para fechar a modal.
	onConfirm: Função para executar a ação confirmada (ex: deletar, editar, etc).
	title: Título da modal.
	message: Texto principal da modal.
	confirmText: Texto do botão de confirmação.
	cancelText: Texto do botão de cancelamento.
	actionType: Determina o tipo de ação da modal. 
	*/

const ActionModal = ({
  show,
  onHide,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  actionType,
  children, 
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && <p>{message}</p>} 
        {children} 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {cancelText}
        </Button>
        <Button variant={actionType === 'delete' ? 'danger' : 'primary'} onClick={onConfirm}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;
