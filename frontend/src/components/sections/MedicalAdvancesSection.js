import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDna, FaRobot, FaBrain, FaHeartbeat } from 'react-icons/fa';
import './SectionsCommon.css';

const MedicalAdvancesSection = () => {
  const advances = [
    {
      id: 1,
      title: 'Medicina Genômica',
      description: 'Tratamentos personalizados com base no perfil genético do paciente, permitindo maior eficácia e menos efeitos colaterais.',
      icon: <FaDna size={40} className="section-icon" />,
      color: '#4527a0'
    },
    {
      id: 2,
      title: 'Medicina Robótica',
      description: 'Cirurgias minimamente invasivas com maior precisão e tempos de recuperação reduzidos graças à robótica avançada.',
      icon: <FaRobot size={40} className="section-icon" />,
      color: '#00838f'
    },
    {
      id: 3,
      title: 'Neurotecnologia',
      description: 'Interfaces cérebro-computador e estimulação cerebral para tratamento de distúrbios neurológicos e reabilitação.',
      icon: <FaBrain size={40} className="section-icon" />,
      color: '#c62828'
    },
    {
      id: 4,
      title: 'Cardiologia Digital',
      description: 'Monitoramento cardíaco contínuo e modelos preditivos para prevenção de eventos cardiovasculares.',
      icon: <FaHeartbeat size={40} className="section-icon" />,
      color: '#ad1457'
    }
  ];

  return (
    <Container className="section-container">
      <h2 className="text-center section-title">Avanços na Medicina Moderna</h2>
      <p className="text-center section-subtitle">
        Exploramos e aplicamos as mais recentes tecnologias médicas para oferecer tratamentos de ponta
      </p>
      
      <Row className="mt-5">
        {advances.map((item) => (
          <Col key={item.id} lg={3} md={6} className="mb-4">
            <Card className="advance-card h-100 text-center">
              <Card.Body>
                <div className="icon-container" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <Card.Title className="mt-4">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MedicalAdvancesSection;
