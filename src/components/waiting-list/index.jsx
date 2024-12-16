import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import waitingData from './../../data/waitingData.json';
import './../../global.css';


const WaitingList = () => {

  const [waitingListData, setWaitingListData] = useState(waitingData);

  const handleDelete = (id) => {
    const updatedList = waitingListData.filter((item) => item.id !== id);
    setWaitingListData(updatedList);

  };

  const handleSchedule = (id) => {
    console.log(`Encaixar paciente com ID: ${id}`);
  };

  return (
    <div className="waiting-list">
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Telefone</th>
            <th>Convênio</th>
            <th>Médico</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {waitingListData.map((item) => (
            <tr key={item.id}>
              <td>{item.patientName}</td>
              <td>{item.phone}</td>
              <td>{item.insurance}</td>
              <td>{item.doctorName}</td>
              <td className="text-center">
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger me-2 p-0"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="bi bi-trash fs-6" />
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-success p-0"
                  onClick={() => handleSchedule(item.id)}
                >
                  <i className="bi bi-check2-circle fs-6" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WaitingList;
