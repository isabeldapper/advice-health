import React from 'react';
import { Form } from 'react-bootstrap';

const EditForm = ({ formData, handleInputChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          name="aviso"
          value={formData.aviso}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data</Form.Label>
        <Form.Control
          type="text"
          name="data"
          value={formData.data}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Prioridade</Form.Label>
        <Form.Control
          type="text"
          name="prioridade"
          value={formData.prioridade}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default EditForm;
