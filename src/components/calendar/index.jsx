import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import schedulingData from './../../data/schedulingData.json';

const MonthCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const filterAppointmentsByDate = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
    const filteredAppointments = schedulingData.filter(appointment => appointment.date === formattedDate);
    setAppointments(filteredAppointments);
  };

  useEffect(() => {
    filterAppointmentsByDate(date);
  }, [date]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="shadow-sm w-100"
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        {appointments.length === 0 ? (
          <Col xs={12}>
            <p>Nenhum agendamento para essa data.</p>
          </Col>
        ) : (
          appointments.map((appointment, index) => (
            <Col xs={12} key={index}>
              <Card className="mb-3 w-100">
                <Card.Body>
                  <Row>
                    <Col xs={2} className="d-flex justify-content-center align-items-center p-2">
                      <PersonCircle size={50} />
                    </Col>
                    <Col xs={9}>
                      <Card.Title>{appointment.patientName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{appointment.insurance}</Card.Subtitle>
                      <Card.Text><strong>Dr(a):</strong> {appointment.doctor}</Card.Text>
                      <Card.Text className="position-absolute top-0 end-0 mt-3 pe-3 fw-bold">
                        {appointment.time}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MonthCalendar;
