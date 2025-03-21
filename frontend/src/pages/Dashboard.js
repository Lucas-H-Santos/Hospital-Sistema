import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserMd, FaFileMedical, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
  // Mockup de dados para o exemplo
  const upcomingAppointments = [
    {
      id: '1',
      doctor: 'Dr. João Silva',
      specialty: 'Cardiologia',
      date: '10/05/2023',
      time: '14:30'
    },
    {
      id: '2',
      doctor: 'Dra. Maria Santos',
      specialty: 'Dermatologia',
      date: '15/05/2023',
      time: '10:00'
    }
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-4">Meu Painel</h2>
      
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <FaCalendarAlt size={40} className="mb-3 text-primary" />
              <Card.Title>Consultas</Card.Title>
              <h3>2</h3>
              <Button as={Link} to="/appointment" variant="outline-primary" size="sm" className="mt-2">
                Agendar Nova
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <FaUserMd size={40} className="mb-3 text-primary" />
              <Card.Title>Meus Médicos</Card.Title>
              <h3>3</h3>
              <Button as={Link} to="/doctors" variant="outline-primary" size="sm" className="mt-2">
                Ver Médicos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <FaFileMedical size={40} className="mb-3 text-primary" />
              <Card.Title>Resultados</Card.Title>
              <h3>5</h3>
              <Button as={Link} to="/results" variant="outline-primary" size="sm" className="mt-2">
                Ver Resultados
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <FaChartLine size={40} className="mb-3 text-primary" />
              <Card.Title>Histórico</Card.Title>
              <h3>8</h3>
              <Button as={Link} to="/history" variant="outline-primary" size="sm" className="mt-2">
                Ver Histórico
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header as="h5">Próximas Consultas</Card.Header>
            <Card.Body>
              {upcomingAppointments.length > 0 ? (
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Médico</th>
                      <th>Especialidade</th>
                      <th>Data</th>
                      <th>Horário</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingAppointments.map(app => (
                      <tr key={app.id}>
                        <td>{app.doctor}</td>
                        <td>{app.specialty}</td>
                        <td>{app.date}</td>
                        <td>{app.time}</td>
                        <td>
                          <Button 
                            as={Link} 
                            to={`/appointment/${app.id}`} 
                            variant="outline-primary" 
                            size="sm"
                            className="me-2"
                          >
                            Detalhes
                          </Button>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                          >
                            Cancelar
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p className="text-center py-3">Você não tem consultas agendadas.</p>
              )}
              <div className="text-center mt-3">
                <Button as={Link} to="/appointment" variant="primary">
                  Agendar Nova Consulta
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header as="h5">Meu Perfil</Card.Header>
            <Card.Body>
              <div className="text-center mb-3">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Foto de Perfil" 
                  className="rounded-circle" 
                  width="100" 
                  height="100" 
                />
              </div>
              <h5 className="card-title text-center">João da Silva</h5>
              <p className="text-center text-muted">joao.silva@email.com</p>
              <hr />
              <p><strong>Telefone:</strong> (99) 99999-9999</p>
              <p><strong>Endereço:</strong> Rua Exemplo, 123</p>
              <p><strong>Cidade:</strong> São Paulo, SP</p>
              <div className="d-grid gap-2">
                <Button as={Link} to="/profile" variant="outline-primary">
                  Editar Perfil
                </Button>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header as="h5">Notificações</Card.Header>
            <Card.Body>
              <div className="mb-3 pb-3 border-bottom">
                <p className="mb-1">
                  <strong>Lembrete de Consulta</strong>
                </p>
                <p className="mb-1">Você tem uma consulta amanhã às 14:30.</p>
                <small className="text-muted">Há 1 hora</small>
              </div>
              
              <div>
                <p className="mb-1">
                  <strong>Resultado Disponível</strong>
                </p>
                <p className="mb-1">Seu exame de sangue está pronto.</p>
                <small className="text-muted">Ontem</small>
              </div>
            </Card.Body>
            <Card.Footer>
              <Link to="/notifications">Ver todas as notificações</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
