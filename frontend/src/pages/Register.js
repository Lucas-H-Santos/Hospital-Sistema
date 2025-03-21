import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('As senhas não coincidem');
    } else {
      console.log('Registrando:', formData);
      // Aqui implementaremos a ação de registro
    }
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">
              <FaUser className="me-2" /> Cadastrar
            </h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Seu nome completo"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />
              </Form.Group>

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
                  placeholder="Crie uma senha (mínimo 6 caracteres)"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirme a Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme sua senha"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  minLength="6"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Cadastrar
              </Button>
            </Form>
            <Row className="py-3">
              <Col>
                Já tem uma conta?{' '}
                <Link to="/login">Entrar</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
