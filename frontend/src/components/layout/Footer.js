import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Hospital Sistema</h5>
            <p>Oferecendo o melhor cuidado para sua saúde desde 2023.</p>
          </Col>
          <Col md={4}>
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><a href="/sobre" className="text-light">Sobre nós</a></li>
              <li><a href="/equipe" className="text-light">Nossa equipe</a></li>
              <li><a href="/servicos" className="text-light">Serviços</a></li>
              <li><a href="/blog" className="text-light">Blog</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <address>
              <strong>Hospital Sistema</strong><br />
              Av. Principal, 1000<br />
              Bairro Centro, Cidade<br />
              <abbr title="Telefone">Tel:</abbr> (99) 9999-9999
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Hospital Sistema - Todos os direitos reservados
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
