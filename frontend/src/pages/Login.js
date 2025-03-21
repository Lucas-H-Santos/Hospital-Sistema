import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login com:', formData);
    // Aqui implementaremos a ação de login
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">
              <FaSignInAlt className="me-2" /> Entrar
            </h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Seu email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Sua senha"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Entrar
              </Button>
            </Form>
            <Row className="py-3">
              <Col>
                <Link to="/forgot-password">Esqueceu sua senha?</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                Novo por aqui?{' '}
                <Link to="/register">Cadastre-se</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
