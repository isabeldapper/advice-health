import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useToast } from '../../context/toast-context'; 
import { useActionModal } from '../../context/action-modal';
import QuickScheduling from './../quick-scheduling';
import WaitingList from './../waiting-list';


const QuickAccess = () => {
  const buttonNames = ['Novo Agendamento', 'Lista de Espera', '+', '+'];
  const { showToastNotification } = useToast();
  const { openModal } = useActionModal(); 

  const handleOpenModal = (action) => {
    if (action === 'agendar') {
      openModal({
        title: 'Novo Agendamento',
        confirmText: 'Salvar',
        cancelText: 'Cancelar',
        actionType: 'agendar',
        children: <QuickScheduling />,  
        onConfirm: () => {
          showToastNotification('Agendamento realizado com sucesso!');
        },
      });
    } else if (action === 'espera') {
      openModal({
        title: 'Lista de Espera',
        confirmText: 'Salvar',
        cancelText: 'Cancelar',
        actionType: 'espera',
        children: <WaitingList />, 
        onConfirm: () => {
          showToastNotification('Lista de espera salva com sucesso!');
        },
      });
    }
  };

  return (
    <div className="border p-3 rounded mb-5">
      <Row className="g-2">
        {buttonNames.map((name, index) => (
          <Col xs={6} sm={3} key={index}>
            <Button
              className="d-flex justify-content-center align-items-center p-0 fs-6 border rounded quick-access-button"
              onClick={() => {
                if (name === 'Novo Agendamento') {
                  handleOpenModal('agendar');
                } else if (name === 'Lista de Espera') {
                  handleOpenModal('espera');
                }
              }}
              variant="light"
            >
              {name === '+' ? <i className="bi bi-plus fs-5"></i> : name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuickAccess;
