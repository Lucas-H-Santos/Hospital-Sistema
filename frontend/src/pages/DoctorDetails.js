import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Badge, Tab, Nav, Table, Form } from 'react-bootstrap';
import { FaStar, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';

const DoctorDetails = ({ match }) => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      const mockDoctor = {
        id: match.params.id,
        name: 'Dr. João Silva',
        specialty: 'Cardiologia',
        rating: 4.8,
        reviewCount: 124,
        image: 'https://via.placeholder.com/300',
        bio: 'Dr. João Silva é um cardiologista experiente com mais de 15 anos de atuação. Especializado em tratamentos cardíacos avançados e prevenção de doenças cardiovasculares.',
        education: [
          {
            id: 1,
            degree: 'Doutorado em Cardiologia',
            institution: 'Universidade de São Paulo',
            year: '2010'
          },
          {
            id: 2,
            degree: 'Residência em Cardiologia',
            institution: 'Hospital das Clínicas - USP',
            year: '2005'
          },
          {
            id: 3,
            degree: 'Graduação em Medicina',
            institution: 'Universidade de São Paulo',
            year: '2002'
          }
        ],
        experience: [
          {
            id: 1,
            position: 'Cardiologista Chefe',
            hospital: 'Hospital São Lucas',
            period: '2015 - Presente'
          },
          {
            id: 2,
            position: 'Cardiologista',
            hospital: 'Hospital Santa Maria',
            period: '2010 - 2015'
          },
          {
            id: 3,
            position: 'Médico Residente',
            hospital: 'Hospital das Clínicas',
            period: '2005 - 2010'
          }
        ],
        schedule: [
          { day: 'Segunda-feira', hours: '08:00 - 12:00' },
          { day: 'Terça-feira', hours: '13:00 - 18:00' },
          { day: 'Quinta-feira', hours: '08:00 - 12:00' },
          { day: 'Sexta-feira', hours: '13:00 - 17:00' }
        ],
        location: 'Unidade Central - 2º andar',
        contact: {
          phone: '(11) 3333-4444',
          email: 'joao.silva@hospital.com'
        },
        reviews: [
          {
            id: 1,
            user: 'Maria A.',
            rating: 5,
            date: '10/04/2023',
            comment: 'Excelente médico! Muito atencioso e explicou tudo detalhadamente.'
          },
          {
            id: 2,
            user: 'Pedro S.',
            rating: 4,
            date: '25/03/2023',
            comment: 'Ótimo atendimento, mas tive que esperar um pouco além do horário marcado.'
          },
          {
            id: 3,
            user: 'Ana R.',
            rating: 5,
            date: '15/02/2023',
            comment: 'Muito profissional e cuidadoso. Recomendo!'
          }
        ]
      };
      
      setDoctor(mockDoctor);
      setLoading(false);
    }, 1000);
  }, [match.params.id]);
  
  if (loading || !doctor) {
    return <Spinner />;
  }
  
  return (
    <div className="py-4">
      <Link to="/doctors" className="btn btn-light mb-4">
        Voltar para Lista de Médicos
      </Link>
      
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="rounded-circle mb-3" 
                width="150" 
                height="150" 
              />
              <h3>{doctor.name}</h3>
              <p className="text-muted mb-2">{doctor.specialty}</p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaStar className="text-warning me-1" />
                <span>{doctor.rating} ({doctor.reviewCount} avaliações)</span>
              </div>
              
              <div className="mb-3">
                <Badge bg="primary" className="me-2">Cardiologia</Badge>
                <Badge bg="info">Doenças Cardiovasculares</Badge>
              </div>
              
              <Button as={Link} to={`/appointment/create/${doctor.id}`} variant="primary" className="w-100">
                <FaCalendarAlt className="me-2" /> Agendar Consulta
              </Button>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Header>Contato</Card.Header>
            <Card.Body>
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                {doctor.location}
              </p>
              <p>
                <FaPhone className="me-2 text-primary" />
                {doctor.contact.phone}
              </p>
              <p className="mb-0">
                <FaEnvelope className="me-2 text-primary" />
                {doctor.contact.email}
              </p>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Header>Horários de Atendimento</Card.Header>
            <Card.Body className="p-0">
              <Table borderless className="mb-0">
                <tbody>
                  {doctor.schedule.map((slot, index) => (
                    <tr key={index}>
                      <td>{slot.day}</td>
                      <td className="text-end">{slot.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h4 className="mb-3">Sobre</h4>
              <p>{doctor.bio}</p>
            </Card.Body>
          </Card>
          
          <Tab.Container id="doctor-tabs" defaultActiveKey="qualifications">
            <Card>
              <Card.Header>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="qualifications">
                      <FaGraduationCap className="me-2" /> Formação
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="experience">
                      <FaBriefcase className="me-2" /> Experiência
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="reviews">
                      <FaStar className="me-2" /> Avaliações
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="qualifications">
                    <h5 className="mb-3">Formação Acadêmica</h5>
                    <ul className="timeline">
                      {doctor.education.map(edu => (
                        <li key={edu.id} className="mb-4">
                          <h6>{edu.degree}</h6>
                          <p className="mb-1">{edu.institution}</p>
                          <p className="text-muted">{edu.year}</p>
                        </li>
                      ))}
                    </ul>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="experience">
                    <h5 className="mb-3">Experiência Profissional</h5>
                    <ul className="timeline">
                      {doctor.experience.map(exp => (
                        <li key={exp.id} className="mb-4">
                          <h6>{exp.position}</h6>
                          <p className="mb-1">{exp.hospital}</p>
                          <p className="text-muted">{exp.period}</p>
                        </li>
                      ))}
                    </ul>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="reviews">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Avaliações de Pacientes</h5>
                      <Button variant="outline-primary" size="sm">
                        Avaliar Médico
                      </Button>
                    </div>
                    
                    {doctor.reviews.map(review => (
                      <Card key={review.id} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between mb-2">
                            <h6 className="mb-0">{review.user}</h6>
                            <small className="text-muted">{review.date}</small>
                          </div>
                          <div className="mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={i < review.rating ? 'text-warning' : 'text-muted'} />
                            ))}
                          </div>
                          <p className="mb-0">{review.comment}</p>
                        </Card.Body>
                      </Card>
                    ))}
                    
                    <Form className="mt-4">
                      <h6>Deixe sua avaliação</h6>
                      <Form.Group className="mb-3">
                        <Form.Label>Classificação</Form.Label>
                        <div>
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-muted me-1 fs-4" style={{ cursor: 'pointer' }} />
                          ))}
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Comentário</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Compartilhe sua experiência..." />
                      </Form.Group>
                      <Button variant="primary">
                        Enviar Avaliação
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  );
};

export default DoctorDetails;
