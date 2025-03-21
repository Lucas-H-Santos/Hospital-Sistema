import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const { name, email, phone, subject, message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Simular envio do formulário
    setTimeout(() => {
      // Se o email termina com @example.com simulamos um erro
      if (email.endsWith('@example.com')) {
        setSubmitError(true);
        setFormSubmitted(false);
      } else {
        setSubmitError(false);
        setFormSubmitted(true);
        // Limpar formulário após envio bem-sucedido
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    }, 1000);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Entre em Contato</h2>

      <Row>
        <Col lg={5} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <h3 className="mb-4">Informações de Contato</h3>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon">
                  <FaMapMarkerAlt size={20} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Endereço</h5>
                  <p className="mb-0">Av. Principal, 1000, Centro<br />São Paulo, SP - CEP 01000-000</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon">
                  <FaPhone size={20} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Telefone</h5>
                  <p className="mb-0">
                    Geral: (11) 3333-4444<br />
                    Emergência: (11) 4444-5555
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon">
                  <FaEnvelope size={20} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0">
                    Atendimento: contato@hospital.com<br />
                    Agendamentos: agenda@hospital.com
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <div className="contact-icon">
                  <FaClock size={20} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Horário de Funcionamento</h5>
                  <p className="mb-0">
                    Segunda a Sexta: 07:00 - 20:00<br />
                    Sábado: 08:00 - 18:00<br />
                    Domingo: 08:00 - 13:00<br />
                    <strong>Emergência 24h</strong>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={7}>
          <Card>
            <Card.Body>
              <h3 className="mb-4">Envie-nos uma mensagem</h3>
              
              {formSubmitted && (
                <Alert variant="success" className="mb-4">
                  <strong>Obrigado pelo contato!</strong> Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
                </Alert>
              )}
              
              {submitError && (
                <Alert variant="danger" className="mb-4">
                  <strong>Erro ao enviar mensagem!</strong> Por favor, tente novamente mais tarde ou entre em contato por telefone.
                </Alert>
              )}
              
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nome completo</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        placeholder="Seu nome"
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Seu email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        placeholder="Seu telefone"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Assunto</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={onChange}
                        placeholder="Assunto da mensagem"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={message}
                    onChange={onChange}
                    rows={6}
                    placeholder="Digite sua mensagem aqui"
                    required
                  />
                </Form.Group>
                
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    <FaPaperPlane className="me-2" /> Enviar Mensagem
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="mt-5">
        <h3 className="mb-4">Nossa Localização</h3>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.35244448692!2d-46.65367799999999!3d-23.5646312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1685712345678!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            title="Localização do Hospital"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
