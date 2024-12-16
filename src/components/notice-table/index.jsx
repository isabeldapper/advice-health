import React, { useState, useCallback } from 'react';
import { Table, Row, Col, Button, Form } from 'react-bootstrap';
import { useToast } from '../../context/toast-context';
import { useActionModal } from '../../context/action-modal';
import SchedulingForm from '../scheduling-form';
import noticeData from './../../data/noticeData.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './../../global.css';


const NoticeTable = () => {
  const { showToastNotification } = useToast();
  const { openModal, closeModal } = useActionModal();

  const [checkedItems, setCheckedItems] = useState([]);
  const [noticeDataState, setNoticeDataState] = useState(noticeData);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [formData, setFormData] = useState({
    notice: '',
    date: '',
    priority: '',
    status: '',
    comments: ''
  });

  const handleCheckboxChange = useCallback((id) => {
    setCheckedItems((prev) => (
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    ));
  }, []);

  const handleOpenDeleteModal = (itemId) => {
    setItemToDelete(itemId);
    openModal({
      title: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir este aviso?',
      confirmText: 'Excluir',
      cancelText: 'Cancelar',
      actionType: 'delete',
      onConfirm: () => handleDeleteItem(itemId) 
    });
  };

  const handleDeleteItem = (itemId) => {
    setNoticeDataState((prev) => prev.filter((item) => item.id !== itemId));
    showToastNotification('Item deletado com sucesso!');
    closeModal();
    setItemToDelete(null);
  };

  const handleOpenDeleteAllModal = () => {
    openModal({
      title: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir os itens selecionados?',
      confirmText: 'Excluir',
      cancelText: 'Cancelar',
      actionType: 'delete',
      onConfirm: handleDeleteAll
    });
  };

  const handleDeleteAll = () => {
    setNoticeDataState((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
    showToastNotification('Itens deletados com sucesso!');
    closeModal();
  };

  const handleOpenEditModal = (itemId) => {
    const item = noticeDataState.find((item) => item.id === itemId);
    setItemToEdit(item);
    setFormData(item);
    openModal({
      title: 'Editar Aviso',
      confirmText: 'Salvar',
      cancelText: 'Cancelar',
      actionType: 'edit',
      onConfirm: handleSaveEdit,
      children: (
        <SchedulingForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )
    });
  };

  const handleSaveEdit = () => {
    setNoticeDataState((prev) => (
      prev.map((item) => (item.id === itemToEdit.id ? { ...item, ...formData } : item))
    ));
    showToastNotification('Item editado com sucesso!');
    closeModal();
    setItemToEdit(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <h2>Avisos/Lembretes</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Prioridade</th>
                <th>Status</th>
                <th>Comentários</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {noticeDataState.map((item) => (
                <tr key={item.id} className={checkedItems.includes(item.id) ? 'selected-row' : ''}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td>{item.notice}</td>
                  <td>{item.date}</td>
                  <td>{item.priority}</td>
                  <td>{item.status}</td>
                  <td>{item.comments}</td>
                  <td className="text-center">
                    <i
                      className="bi bi-pencil cursor-pointer me-3"
                      title="Editar"
                      onClick={() => handleOpenEditModal(item.id)}
                    ></i>
                    <i
                      className="bi bi-trash cursor-pointer"
                      title="Deletar"
                      onClick={() => handleOpenDeleteModal(item.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {checkedItems.length > 1 && (
        <Row className="mt-3">
          <Col className="text-end">
            <Button variant="danger" onClick={handleOpenDeleteAllModal}>
              Excluir Selecionados
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default NoticeTable;
