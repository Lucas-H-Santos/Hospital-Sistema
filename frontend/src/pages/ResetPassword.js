import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaKey } from 'react-icons/fa';

const ResetPassword = ({ match }) => {
  const [formData, setFormData] = useState({
    password: '',
    password2: '',
  });
  const [resetSuccess, setResetSuccess] = useState(false);

  const { password, password2 } = formData;
  const resetToken = match.params.resetToken;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('As senhas não coincidem');
    } else {
      console.log('Redefinindo senha com token:', resetToken);
      // Aqui implementaremos a ação de redefinição de senha
      setResetSuccess(true);
    }
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">
              <FaKey className="me-2" /> Redefinir Senha
            </h2>

            {resetSuccess ? (
              <>
                <div className="alert alert-success">
                  Sua senha foi redefinida com sucesso!
                </div>
                <Link to="/login" className="btn btn-primary w-100">
                  Fazer login
                </Link>
              </>
            ) : (
              <>
                <p className="text-center mb-4">
                  Digite sua nova senha abaixo para redefini-la.
                </p>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nova Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite sua nova senha"
                      name="password"
                      value={password}
                      onChange={onChange}
                      minLength="6"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirme a Nova Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirme sua nova senha"
                      name="password2"
                      value={password2}
                      onChange={onChange}
                      minLength="6"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Redefinir Senha
                  </Button>
                </Form>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ResetPassword;
