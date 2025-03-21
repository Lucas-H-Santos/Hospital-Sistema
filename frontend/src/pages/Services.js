import React from 'react';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import {
  FaNotesMedical,
  FaAmbulance,
  FaHeartbeat,
  FaXRay,
  FaFlask,
  FaBaby,
  FaTooth,
  FaEye
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Consultas Médicas',
      description:
        'Consultas com médicos especialistas em diversas áreas da medicina.',
      icon: <FaNotesMedical size={40} className="mb-4 text-primary" />,
      details: [
        'Avaliação médica completa',
        'Diagnóstico preciso',
        'Prescrição de tratamentos',
        'Acompanhamento personalizado',
        'Médicos com vasta experiência'
      ]
    },
    {
      id: 2,
      title: 'Emergência 24h',
      description:
        'Serviço de emergência disponível 24 horas por dia, todos os dias da semana.',
      icon: <FaAmbulance size={40} className="mb-4 text-primary" />,
      details: [
        'Atendimento imediato',
        'Equipe médica de plantão',
        'Unidades de tratamento intensivo',
        'Ambulâncias equipadas',
        'Procedimentos de emergência'
      ]
    },
    {
      id: 3,
      title: 'Cardiologia',
      description:
        'Diagnóstico e tratamento de doenças relacionadas ao coração.',
      icon: <FaHeartbeat size={40} className="mb-4 text-primary" />,
      details: [
        'Ecocardiograma',
        'Teste ergométrico',
        'Holter 24h',
        'Cateterismo cardíaco',
        'Cirurgias cardíacas'
      ]
    },
    {
      id: 4,
      title: 'Radiologia',
      description:
        'Exames de imagem para diagnóstico preciso de diversas condições.',
      icon: <FaXRay size={40} className="mb-4 text-primary" />,
      details: [
        'Raio-X digital',
        'Tomografia computadorizada',
        'Ressonância magnética',
        'Ultrassonografia',
        'Densitometria óssea'
      ]
    },
    {
      id: 5,
      title: 'Laboratório',
      description:
        'Análises clínicas e exames laboratoriais com resultados precisos e rápidos.',
      icon: <FaFlask size={40} className="mb-4 text-primary" />,
      details: [
        'Hemograma completo',
        'Bioquímica',
        'Hormonais',
        'Análises microbiológicas',
        'Coleta domiciliar'
      ]
    },
    {
      id: 6,
      title: 'Maternidade',
      description:
        'Acompanhamento durante toda a gestação, parto e pós-parto.',
      icon: <FaBaby size={40} className="mb-4 text-primary" />,
      details: [
        'Pré-natal completo',
        'Parto humanizado',
        'UTI neonatal',
        'Apoio à amamentação',
        'Acompanhamento pós-parto'
      ]
    },
    {
      id: 7,
      title: 'Odontologia',
      description:
        'Cuidados com a saúde bucal, desde a prevenção até tratamentos complexos.',
      icon: <FaTooth size={40} className="mb-4 text-primary" />,
      details: [
        'Limpeza e profilaxia',
        'Tratamento de canal',
        'Implantes dentários',
        'Ortodontia',
        'Cirurgias odontológicas'
      ]
    },
    {
      id: 8,
      title: 'Oftalmologia',
      description:
        'Exames e tratamentos relacionados à saúde dos olhos e visão.',
      icon: <FaEye size={40} className="mb-4 text-primary" />,
      details: [
        'Exame de vista completo',
        'Cirurgia de catarata',
        'Tratamento de glaucoma',
        'Correção de miopia',
        'Prescrição de lentes de contato'
      ]
    }
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-3 text-center">Nossos Serviços</h2>
      <p className="lead text-center mb-5">
        Oferecemos uma gama completa de serviços médicos e de saúde para cuidar 
        de você e sua família.
      </p>

      <Row>
        {services.map((service) => (
          <Col key={service.id} lg={4} md={6} className="mb-4">
            <Card className="h-100 service-card text-center">
              <Card.Body>
                {service.icon}
                <Card.Title className="mb-3">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 pb-4">
                <Button
                  variant="outline-primary"
                  data-toggle="modal"
                  data-target={`#serviceModal${service.id}`}
                  onClick={() => {
                    window.location.href = `#service-details-${service.id}`;
                  }}
                >
                  Saiba Mais
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5">
        <h3 className="mb-4">Detalhes dos Serviços</h3>
        <Accordion>
          {services.map((service) => (
            <Accordion.Item 
              key={service.id} 
              eventKey={service.id.toString()}
              id={`service-details-${service.id}`}
            >
              <Accordion.Header>
                {service.title} <span className="ms-2 text-muted">- Clique para ver detalhes</span>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <div className="text-center py-3">
                      {service.icon}
                      <h5>{service.title}</h5>
                    </div>
                  </Col>
                  <Col md={8}>
                    <p>{service.description}</p>
                    <h6>O que oferecemos:</h6>
                    <ul>
                      {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <Button variant="primary" as="a" href="/appointment" className="mt-3">
                      Agendar
                    </Button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Services;
