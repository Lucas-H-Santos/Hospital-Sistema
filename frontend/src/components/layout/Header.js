import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Navbar principal */}
      <Navbar bg="white" expand="lg" className="main-navbar py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <span className="hospital-name">Hospital Sistema</span>
            <small className="tagline">Cuidando de você e sua família</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Início</Nav.Link>
              
              <NavDropdown title="Sobre Nós" id="sobre-dropdown">
                <NavDropdown.Item as={NavLink} to="/sobre/historia">Nossa História</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sobre/equipe">Nossa Equipe</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sobre/infraestrutura">Infraestrutura</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sobre/missao">Missão e Valores</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Serviços" id="servicos-dropdown">
                <NavDropdown.Item as={NavLink} to="/services">Todos os Serviços</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/services/consultas">Consultas</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/exames">Exames e Diagnósticos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/cirurgias">Cirurgias</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/tratamentos">Tratamentos</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Especialidades" id="especialidades-dropdown">
                <NavDropdown.Item as={NavLink} to="/departments">Todos os Departamentos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/departments/cardiologia">Cardiologia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/neurologia">Neurologia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/ortopedia">Ortopedia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/pediatria">Pediatria</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/mais">Mais Especialidades...</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={NavLink} to="/doctors">Médicos</Nav.Link>
              
              <NavDropdown title="Pacientes" id="pacientes-dropdown">
                <NavDropdown.Item as={NavLink} to="/appointment">Agendar Consulta</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/planos-saude">Planos de Saúde</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/preparacao-exames">Preparação para Exames</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/resultados">Resultados Online</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={NavLink} to="/noticias">Notícias</Nav.Link>
              
              <Nav.Link as={NavLink} to="/contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Nova barra abaixo do menu principal com informações de contato */}
      <div className="contact-bar py-2">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <FaPhone className="me-1 text-primary" />
              <span>(11) 3333-4444</span>
            </div>
            <div>
              <FaEnvelope className="me-1 text-primary" />
              <span>contato@hospital.com</span>
            </div>
          </div>
          <div className="mt-2 mt-sm-0">
            <Link to="/appointment" className="me-3 text-decoration-none">
              <FaCalendarAlt className="me-1 text-primary" />
              <span>Agendar Consulta</span>
            </Link>
            <Link to="/login" className="me-3 text-decoration-none">
              <FaSignInAlt className="me-1 text-primary" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="text-decoration-none">
              <FaUserPlus className="me-1 text-primary" />
              <span>Cadastre-se</span>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
