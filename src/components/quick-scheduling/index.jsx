import React, { useState, useEffect } from 'react';
import insuranceData from './../../data/insuranceData.json';
import doctorData from './../../data/doctorData.json';
import personsData from './../../data/personsData.json';
import schedulingData from './../../data/schedulingData.json';


const QuickScheduling = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    insurance: '',
    date: '',
    time: '',
    doctor: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);


  const filterAvailableTimes = (selectedDate) => {
    const occupiedTimes = schedulingData
      .filter((appointment) => appointment.date === selectedDate)
      .map((appointment) => appointment.time);

    const allTimes = [
      '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30'
    ];


    const available = allTimes.map((time) => ({
      time,
      disabled: occupiedTimes.includes(time),
    }));

    setAvailableTimes(available);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
      filterAvailableTimes(value);
    }

    if (name === 'patientName') {
      setFilteredPatients(
        patients.filter((patient) => patient.name.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };


  useEffect(() => {
    setInsurances(insuranceData);
    setDoctors(doctorData);
    setPatients(personsData);

    const today = new Date().toISOString().split('T')[0]; // Data no formato YYYY-MM-DD
    filterAvailableTimes(today); // Inicializa com a data atual 
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-12" style={{ maxWidth: '700px', width: '100%' }}>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">Nome do Paciente</label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
              list="patient-suggestions"
            />
            <datalist id="patient-suggestions">
              {filteredPatients.map((patient) => (
                <option key={patient.id} value={patient.name} />
              ))}
            </datalist>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Telefone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="insurance" className="form-label">Convênio</label>
            <select
              className="form-select"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              {insurances.map((insurance) => (
                <option key={insurance.id} value={insurance.name}>
                  {insurance.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Data</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">Hora</label>
            <select
              className="form-select"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Selecione a hora</option>
              {availableTimes.map((item, index) => (
                <option
                  key={index}
                  value={item.time}
                  disabled={item.disabled} // Desabilita a opção se o horário estiver ocupado
                >
                  {item.time}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="doctor" className="form-label">Médico</label>
            <select
              className="form-select"
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o médico</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickScheduling;
