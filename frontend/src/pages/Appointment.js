import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaCalendarCheck, FaUserMd, FaClock } from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';

const Appointment = ({ history, match }) => {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [formData, setFormData] = useState({
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    notes: ''
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { specialty, doctor, date, time, reason, notes } = formData;
  
  useEffect(() => {
    // Carregando especialidades para o seletor
    const mockSpecialties = [
      'Cardiologia',
      'Dermatologia',
      'Neurologia',
      'Ortopedia',
      'Pediatria',
      'Ginecologia',
      'Oftalmologia',
      'Psiquiatria'
    ];
    
    setSpecialties(mockSpecialties);
  }, []);
  
  useEffect(() => {
    // Quando uma especialidade é selecionada, carregar os médicos dessa especialidade
    if (specialty) {
      setLoading(true);
      
      // Simulando uma chamada de API
      setTimeout(() => {
        const mockDoctors = [
          { id: '1', name: 'Dr. João Silva', specialty: 'Cardiologia' },
          { id: '2', name: 'Dra. Maria Santos', specialty: 'Cardiologia' },
          { id: '3', name: 'Dr. Pedro Oliveira', specialty: 'Ortopedia' },
          { id: '4', name: 'Dra. Ana Costa', specialty: 'Neurologia' },
          { id: '5', name: 'Dr. Carlos Mendes', specialty: 'Dermatologia' }
        ].filter(doc => doc.specialty === specialty);
        
        setDoctors(mockDoctors);
        setLoading(false);
      }, 500);
    } else {
      setDoctors([]);
    }
    
    // Resetar o médico selecionado quando a especialidade muda
    setFormData({ ...formData, doctor: '' });
  }, [specialty]);
  
  useEffect(() => {
    // Quando uma data e médico são selecionados, carregar horários disponíveis
    if (doctor && date) {
      setLoading(true);
      
      // Simulando uma chamada de API
      setTimeout(() => {
        const mockTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        // Remover alguns horários aleatórios para simular indisponibilidade
        const availableTimes = mockTimes.filter(() => Math.random() > 0.3);
        
        setAvailableTimes(availableTimes);
        setLoading(false);
      }, 500);
    } else {
      setAvailableTimes([]);
    }
    
    // Resetar o horário selecionado quando a data ou médico muda
    setFormData({ ...formData, time: '' });
  }, [doctor, date]);
  
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    
    if (!specialty || !doctor || !date || !time || !reason) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    setLoading(true);
    
    // Simular envio de dados para API
    setTimeout(() => {
      console.log('Dados enviados:', formData);
      setLoading(false);
      setSuccessMessage('Sua consulta foi agendada com sucesso!');
      
      // Resetar formulário após sucesso
      setFormData({
        specialty: '',
        doctor: '',
        date: '',
        time: '',
        reason: '',
        notes: ''
      });
      
      // Redirecionar para dashboard após 2 segundos
      setTimeout(() => {
        history.push('/dashboard');
      }, 2000);
    }, 1000);
  };
  
  return (
    <div className="py-4">
      <h2 className="mb-4">
        <FaCalendarCheck className="me-2" /> Agendar Consulta
      </h2>
      
      {successMessage && (
        <Alert variant="success" className="mb-4">
          {successMessage}
        </Alert>
      )}
      
      {errorMessage && (
        <Alert variant="danger" className="mb-4" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}
      
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Especialidade *</Form.Label>
                      <Form.Select 
                        name="specialty"
                        value={specialty}
                        onChange={onChange}
                        required
                      >
                        <option value="">Selecione uma especialidade</option>
                        {specialties.map((spec, index) => (
                          <option key={index} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Médico *</Form.Label>
                      <Form.Select 
                        name="doctor"
                        value={doctor}
                        onChange={onChange}
                        disabled={!specialty || doctors.length === 0}
                        required
                      >
                        <option value="">
                          {loading ? 'Carregando...' : 'Selecione um médico'}
                        </option>
                        {doctors.map(doc => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Data *</Form.Label>
                      <Form.Control 
                        type="date" 
                        name="date"
                        value={date}
                        onChange={onChange}
                        min={new Date().toISOString().split('T')[0]}
                        disabled={!doctor}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Horário *</Form.Label>
                      <Form.Select 
                        name="time"
                        value={time}
                        onChange={onChange}
                        disabled={!date || availableTimes.length === 0}
                        required
                      >
                        <option value="">
                          {loading ? 'Carregando...' : 'Selecione um horário'}
                        </option>
                        {availableTimes.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </Form.Select>
                      {date && availableTimes.length === 0 && !loading && (
                        <Form.Text className="text-danger">
                          Não há horários disponíveis para esta data.
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Motivo da Consulta *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="reason"
                    value={reason}
                    onChange={onChange}
                    placeholder="Descreva brevemente o motivo da consulta"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Observações Adicionais</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={2} 
                    name="notes"
                    value={notes}
                    onChange={onChange}
                    placeholder="Informações adicionais, alergias, medicamentos em uso, etc."
                  />
                </Form.Group>
                
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button as={Link} to="/dashboard" variant="light" className="me-md-2">
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? 'Agendando...' : 'Agendar Consulta'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Instruções</h5>
            </Card.Header>
            <Card.Body>
              <p>
                Para agendar sua consulta, siga os passos abaixo:
              </p>
              <ol>
                <li>Selecione a especialidade médica desejada</li>
                <li>Escolha o médico de sua preferência</li>
                <li>Selecione uma data disponível</li>
                <li>Escolha um horário disponível</li>
                <li>Informe o motivo da consulta</li>
              </ol>
              <p className="mb-0">
                Após o agendamento, você receberá uma confirmação por e-mail.
              </p>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header>
              <h5 className="mb-0">Informações Importantes</h5>
            </Card.Header>
            <Card.Body>
              <p><FaUserMd className="me-2 text-primary" /> Chegue 15 minutos antes do horário marcado.</p>
              <p><FaClock className="me-2 text-primary" /> Cancelamentos devem ser feitos com pelo menos 24h de antecedência.</p>
              <p className="mb-0">Traga seus exames anteriores e a lista de medicamentos em uso.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
