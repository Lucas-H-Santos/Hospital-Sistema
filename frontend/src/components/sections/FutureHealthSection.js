import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SectionsCommon.css';

const FutureHealthSection = () => {
  return (
    <Container className="section-container">
      <h2 className="text-center section-title">O Futuro da Saúde Já Começou</h2>
      <p className="text-center section-subtitle mb-5">
        Estamos na vanguarda da inovação médica, combinando tecnologia e cuidado humano
      </p>
      
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="future-health-content">
            <h3 className="mb-4">Medicina Preventiva e Preditiva</h3>
            <p>
              Nossos sistemas de saúde inteligentes são capazes de identificar riscos e prever condições médicas com até 5 anos de antecedência, permitindo intervenções preventivas personalizadas.
            </p>
            <p>
              Combinamos sensores avançados, monitoramento contínuo e algoritmos de IA para criar um modelo de saúde que não apenas trata doenças, mas previne seu surgimento.
            </p>
            
            <ul className="check-list">
              <li>Monitoramento contínuo e não invasivo de biomarcadores</li>
              <li>Alertas precoces de alterações fisiológicas</li>
              <li>Planos de prevenção personalizados</li>
              <li>Telemedicina integrada com dispositivos IoT</li>
              <li>Análises preditivas usando Big Data em saúde</li>
            </ul>
            
            <Button as={Link} to="/future-health" variant="outline-primary" className="mt-3">
              Conhecer nossos programas de saúde preventiva
            </Button>
          </div>
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0">
          <Row>
            <Col sm={6} className="mb-4">
              <Card className="timeline-card">
                <Card.Body>
                  <div className="year">2023</div>
                  <h5>Diagnóstico IA</h5>
                  <p>Implementação de sistemas de diagnóstico assistido por inteligência artificial.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-4">
              <Card className="timeline-card future">
                <Card.Body>
                  <div className="year">2024</div>
                  <h5>Medicina de Precisão</h5>
                  <p>Tratamentos personalizados com base no genoma completo do paciente.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-4">
              <Card className="timeline-card future">
                <Card.Body>
                  <div className="year">2025</div>
                  <h5>Órgãos Bioimpressos</h5>
                  <p>Primeiros testes com órgãos criados por bioimpressão 3D.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-4">
              <Card className="timeline-card future">
                <Card.Body>
                  <div className="year">2028</div>
                  <h5>Terapia Genética</h5>
                  <p>Programas avançados de edição genética para doenças hereditárias.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FutureHealthSection;
