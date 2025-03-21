import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './SectionsCommon.css';

const AIHealthcareSection = () => {
  const aiApplications = [
    {
      id: 1,
      title: 'Diagnóstico Precoce',
      description: 'Algoritmos de deep learning detectam padrões sutis em exames de imagem que podem escapar ao olho humano, permitindo diagnósticos mais precisos e precoces.',
      progress: 92,
      variant: 'success'
    },
    {
      id: 2,
      title: 'Medicina Preventiva',
      description: 'Modelos preditivos analisam dados históricos e fatores de risco para identificar pacientes com maior probabilidade de desenvolver condições específicas.',
      progress: 87,
      variant: 'info'
    },
    {
      id: 3,
      title: 'Personalização de Tratamento',
      description: 'IA analisa o perfil genético, histórico médico e estilo de vida para recomendar tratamentos personalizados com maior eficácia e menos efeitos colaterais.',
      progress: 85,
      variant: 'primary'
    },
    {
      id: 4,
      title: 'Assistência ao Diagnóstico',
      description: 'Sistemas de suporte à decisão clínica ajudam médicos a considerar todas as possibilidades diagnósticas com base em evidências atualizadas.',
      progress: 90,
      variant: 'warning'
    }
  ];

  return (
    <Container className="section-container">
      <h2 className="text-center section-title">Inteligência Artificial na Saúde</h2>
      <p className="text-center section-subtitle mb-5">
        Utilizamos tecnologias de IA para revolucionar diagnósticos, tratamentos e cuidados preventivos
      </p>
      
      <Row>
        {aiApplications.map((item) => (
          <Col key={item.id} lg={6} className="mb-4">
            <Card className="ai-card h-100">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  {item.title}
                  <span className="text-primary">{item.progress}%</span>
                </Card.Title>
                <ProgressBar 
                  variant={item.variant} 
                  now={item.progress} 
                  className="mb-3"
                  style={{ height: "8px" }}
                />
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <div className="stat-card">
            <h3>94%</h3>
            <p>de precisão em diagnósticos assistidos por IA</p>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="stat-card">
            <h3>68%</h3>
            <p>de redução no tempo de diagnóstico</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHealthcareSection;
