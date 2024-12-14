// TabelaAvisos.js
import React, { useState, useCallback } from 'react';
import { Table, Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ActionModal from '../action-modal';
import EditForm from './components/edit-form';

const TabelaAvisos = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [dados, setDados] = useState([
    { id: 1, aviso: 'Aviso 1', data: '12/12/2024', prioridade: 'Alta' },
    { id: 2, aviso: 'Aviso 2', data: '13/12/2024', prioridade: 'Média' },
    { id: 3, aviso: 'Aviso 3', data: '14/12/2024', prioridade: 'Baixa' },
    { id: 4, aviso: 'Aviso 4', data: '15/12/2024', prioridade: 'Alta' },
    { id: 5, aviso: 'Aviso 5', data: '16/12/2024', prioridade: 'Média' },
    { id: 6, aviso: 'Aviso 6', data: '17/12/2024', prioridade: 'Baixa' },
    { id: 7, aviso: 'Aviso 7', data: '18/12/2024', prioridade: 'Alta' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [formData, setFormData] = useState({ aviso: '', data: '', prioridade: '' });

  // Função de controle de checkboxes
  const handleCheckboxChange = useCallback((id) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id)
        ? prevCheckedItems.filter(item => item !== id)
        : [...prevCheckedItems, id]
    );
  }, []);

  // Função para abrir a modal de exclusão de um único item
  const handleOpenModal = (itemId) => {
    setItemToDelete(itemId);
    setShowModal(true);
  };

  // Função para excluir o item individual
  const handleDeleteItem = () => {
    setDados(dados.filter(item => item.id !== itemToDelete));
    setShowModal(false);
    setItemToDelete(null);
  };

  // Função para abrir a modal de exclusão de todos os itens
  const handleOpenDeleteAllModal = () => {
    setShowDeleteAllModal(true);
  };

  // Função para excluir todos os itens selecionados
  const handleDeleteAll = () => {
    setDados(dados.filter(item => !checkedItems.includes(item.id)));
    setShowDeleteAllModal(false); //
    setCheckedItems([]);
  };

  // Função para abrir a modal de edição de um item
  const handleOpenEditModal = (itemId) => {
    const item = dados.find((item) => item.id === itemId);
    setItemToEdit(item);
    setFormData({
      aviso: item.aviso,
      data: item.data,
      prioridade: item.prioridade,
    });
    setShowEditModal(true);
  };


  // Função para atualizar os dados do item editado
  const handleSaveEdit = () => {
    const updatedData = dados.map((item) =>
      item.id === itemToEdit.id ? { ...item, ...formData } : item
    );
    setDados(updatedData);
    setShowEditModal(false);
    setItemToEdit(null);
  };

  // Função para controlar as mudanças nos campos de formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Container className="col-8">
      <Row className="mb-3">
        <Col xs={12}>
          <h2 className="text-start">Avisos/Lembretes</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="w-auto"></th>
                <th className="w-25">Descrição</th>
                <th className="w-20">Data</th>
                <th className="w-20">Prioridade</th>
                <th className="w-15">Status</th>
                <th className="w-15">Comentários</th>
                <th className="w-20">
                  <span className="visually-hidden">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr
                  key={item.id}
                  className={checkedItems.includes(item.id) ? 'selected-row' : ''}
                >
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td>{item.aviso}</td>
                  <td>{item.data}</td>
                  <td>{item.prioridade}</td>
                  <td>{/* Status */}</td>
                  <td>{/* Comentários */}</td>
                  <td className="d-flex justify-content-center">
                    <i
                      className={`bi bi-pencil fs-6 cursor-pointer me-3 ${checkedItems.includes(item.id) ? 'text-muted' : ''}`}
                      title="Editar"
                      onClick={() => handleOpenEditModal(item.id)}
                      style={{ pointerEvents: checkedItems.includes(item.id) ? 'none' : 'auto' }}
                    ></i>
                    <i
                      className={`bi bi-trash fs-6 cursor-pointer ${checkedItems.includes(item.id) ? 'text-muted' : ''}`}
                      title="Deletar"
                      onClick={() => handleOpenModal(item.id)}
                      style={{ pointerEvents: checkedItems.includes(item.id) ? 'none' : 'auto' }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Modal Genérica para Confirmar Exclusão de um único item */}
      <ActionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDeleteItem}
        title="Confirmar Exclusão"
        message="Tem certeza de que deseja excluir este aviso?"
        confirmText="Excluir"
        cancelText="Cancelar"
        actionType="delete"
      />

      {/* Modal de confirmação para excluir todos os itens selecionados */}
      <ActionModal
        show={showDeleteAllModal}
        onHide={() => setShowDeleteAllModal(false)}
        onConfirm={handleDeleteAll}
        title="Confirmar Exclusão"
        message="Tem certeza de que deseja excluir os itens selecionados?"
        confirmText="Excluir"
        cancelText="Cancelar"
        actionType="delete"
      />

      {/* Modal de Edição de Aviso */}
      <ActionModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        title="Editar Aviso"
        confirmText="Salvar"
        cancelText="Cancelar"
        onConfirm={handleSaveEdit}
        actionType="edit"
      >
        <EditForm formData={formData} handleInputChange={handleInputChange} />
      </ActionModal>


      {checkedItems.length > 1 && (
        <Row className="mt-3">
          <Col xs={12} className="d-flex justify-content-end">
            <Button
              variant="danger"
              onClick={handleOpenDeleteAllModal}
            >
              Excluir Todos
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TabelaAvisos;
