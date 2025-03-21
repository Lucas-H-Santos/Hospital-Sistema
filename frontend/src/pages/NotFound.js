import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Página não encontrada</h2>
          <p className="mb-4">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Voltar para a página inicial
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
