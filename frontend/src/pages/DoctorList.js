import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  
  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      const mockDoctors = [
        {
          id: '1',
          name: 'Dr. João Silva',
          specialty: 'Cardiologia',
          rating: 4.8,
          reviewCount: 124,
          image: 'https://via.placeholder.com/150',
          location: 'Unidade Central',
          education: 'Universidade de São Paulo',
          availability: true
        },
        {
          id: '2',
          name: 'Dra. Maria Santos',
          specialty: 'Dermatologia',
          rating: 4.9,
          reviewCount: 98,
          image: 'https://via.placeholder.com/150',
          location: 'Unidade Norte',
          education: 'Universidade Federal do Rio de Janeiro',
          availability: true
        },
        {
          id: '3',
          name: 'Dr. Pedro Oliveira',
          specialty: 'Ortopedia',
          rating: 4.7,
          reviewCount: 112,
          image: 'https://via.placeholder.com/150',
          location: 'Unidade Sul',
          education: 'Universidade de Campinas',
          availability: false
        },
        {
          id: '4',
          name: 'Dra. Ana Costa',
          specialty: 'Neurologia',
          rating: 4.9,
          reviewCount: 87,
          image: 'https://via.placeholder.com/150',
          location: 'Unidade Central',
          education: 'Universidade de São Paulo',
          availability: true
        }
      ];
      
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Filtrar médicos com base no termo de pesquisa e especialidade
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === '' || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });
  
  // Lista única de especialidades para o filtro
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  
  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div className="py-4">
      <h2 className="mb-4">Nossos Médicos</h2>
      
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <Form.Control
              placeholder="Buscar médicos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary">
              <FaSearch /> Buscar
            </Button>
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select 
            value={specialty} 
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Todas as especialidades</option>
            {specialties.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      
      <Row>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <Col key={doctor.id} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="rounded-circle me-3" 
                      width="80" 
                      height="80" 
                    />
                    <div>
                      <h5 className="mb-1">{doctor.name}</h5>
                      <p className="text-muted mb-1">{doctor.specialty}</p>
                      <div className="d-flex align-items-center">
                        <FaStar className="text-warning me-1" />
                        <span>{doctor.rating} ({doctor.reviewCount} avaliações)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-1">
                    <FaMapMarkerAlt className="me-2 text-primary" />
                    {doctor.location}
                  </p>
                  <p className="mb-3">
                    <small>Formação: {doctor.education}</small>
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${doctor.availability ? 'bg-success' : 'bg-secondary'}`}>
                      {doctor.availability ? 'Disponível' : 'Indisponível'}
                    </span>
                    <Button 
                      as={Link} 
                      to={`/doctor/${doctor.id}`} 
                      variant="primary"
                    >
                      Ver Perfil
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center py-5">Nenhum médico encontrado com os critérios de busca.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default DoctorList;
