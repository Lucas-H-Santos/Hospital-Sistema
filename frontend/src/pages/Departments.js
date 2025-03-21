import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaStethoscope, FaBriefcaseMedical, FaHospital, FaArrowRight } from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      const mockDepartments = [
        {
          id: '1',
          name: 'Cardiologia',
          description: 'Tratamento de doenças cardíacas e procedimentos relacionados ao coração.',
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
          icon: <FaStethoscope size={40} className="mb-4 text-primary" />,
          head: 'Dr. João Silva',
          services: [
            'Consultas cardiológicas',
            'Ecocardiograma',
            'Teste de esforço',
            'Cateterismo cardíaco',
            'Tratamento de arritmias'
          ],
          doctors: 8
        },
        {
          id: '2',
          name: 'Neurologia',
          description: 'Diagnóstico e tratamento de distúrbios do sistema nervoso central e periférico.',
          image: 'https://images.unsplash.com/photo-1559757175-7b21e5afae9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
          icon: <FaBriefcaseMedical size={40} className="mb-4 text-primary" />,
          head: 'Dra. Ana Costa',
          services: [
            'Consultas neurológicas',
            'Eletroencefalograma',
            'Tomografia computadorizada',
            'Ressonância magnética',
            'Tratamento de enxaquecas'
          ],
          doctors: 6
        },
        {
          id: '3',
          name: 'Ortopedia',
          description: 'Prevenção, diagnóstico e tratamento de problemas relacionados ao sistema músculo-esquelético.',
          image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          icon: <FaHospital size={40} className="mb-4 text-primary" />,
          head: 'Dr. Pedro Oliveira',
          services: [
            'Consultas ortopédicas',
            'Radiografias',
            'Cirurgias ortopédicas',
            'Fisioterapia',
            'Tratamento de fraturas'
          ],
          doctors: 7
        },
        {
          id: '4',
          name: 'Dermatologia',
          description: 'Diagnóstico e tratamento de doenças da pele, cabelos e unhas.',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          icon: <FaBriefcaseMedical size={40} className="mb-4 text-primary" />,
          head: 'Dra. Maria Santos',
          services: [
            'Consultas dermatológicas',
            'Biópsias de pele',
            'Tratamentos estéticos',
            'Cirurgias dermatológicas',
            'Tratamento de acne'
          ],
          doctors: 5
        }
      ];
      
      setDepartments(mockDepartments);
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div className="py-4">
      <h2 className="mb-4">Departamentos Médicos</h2>
      <p className="lead mb-5">
        Conheça nossos departamentos especializados, equipados com a mais alta tecnologia 
        e coordenados pelos melhores profissionais do país.
      </p>
      
      <Row>
        {departments.map((dept) => (
          <Col key={dept.id} md={6} className="mb-4">
            <Card className="h-100 department-card">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img 
                    src={dept.image} 
                    alt={dept.name}
                    className="h-100 rounded-start"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7}>
                  <Card.Body className="d-flex flex-column">
                    <div className="text-center mb-3">
                      {dept.icon}
                    </div>
                    <Card.Title className="text-center mb-3">{dept.name}</Card.Title>
                    <Card.Text className="mb-3">
                      {dept.description}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <strong>Chefe de Departamento:</strong> {dept.head}
                    </Card.Text>
                    <Card.Text className="mb-3">
                      <strong>Equipe:</strong> {dept.doctors} médicos especializados
                    </Card.Text>
                    <div className="mt-auto text-center">
                      <Button 
                        as={Link} 
                        to={`/department/${dept.id}`}
                        variant="outline-primary"
                      >
                        Ver Detalhes <FaArrowRight className="ms-2" />
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Departments;
