import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Redefinindo senha para:', email);
    // Aqui implementaremos a ação de esqueci senha
    setEmailSent(true);
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">
              <FaLock className="me-2" /> Esqueci minha senha
            </h2>
            {emailSent ? (
              <>
                <div className="alert alert-success">
                  Enviamos um email com instruções para redefinir sua senha.
                </div>
                <Link to="/login" className="btn btn-primary w-100">
                  Voltar para o login
                </Link>
              </>
            ) : (
              <>
                <p className="text-center mb-4">
                  Informe o email associado à sua conta para receber instruções de redefinição de senha.
                </p>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Seu email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Enviar instruções
                  </Button>
                </Form>
                <Row className="py-3">
                  <Col>
                    <Link to="/login">Voltar para o login</Link>
                  </Col>
                </Row>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
