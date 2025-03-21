import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserMd, FaCalendarCheck, FaHospital, FaQuestion } from 'react-icons/fa';
import FeatureCarousel from '../components/carousel/FeatureCarousel';
import NewsCarousel from '../components/carousel/NewsCarousel';
import ParallaxSection from '../components/sections/ParallaxSection';
import MedicalAdvancesSection from '../components/sections/MedicalAdvancesSection';
import AIHealthcareSection from '../components/sections/AIHealthcareSection';
import FutureHealthSection from '../components/sections/FutureHealthSection';
import LatestNews from '../components/news/LatestNews';
import './Home.css';

const Home = () => {
  // Função para detectar quando elementos entram na viewport e adicionar classe para animação
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.fade-in-section');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Cuidamos da sua saúde</h1>
          <p>
            Bem-vindo ao Hospital Sistema, onde oferecemos cuidados médicos de
            alta qualidade com uma equipe dedicada de profissionais.
          </p>
          <Button 
            as={Link} 
            to="/appointment" 
            variant="primary" 
            size="lg" 
            className="hero-btn"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>

      <Container>
        {/* Carousel principal de destaques */}
        <FeatureCarousel />

        <h2 className="text-center mb-4">Nossos Serviços</h2>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <FaUserMd size={50} className="mb-3 text-primary" />
                <Card.Title>Consultas Médicas</Card.Title>
                <Card.Text>
                  Agende consultas com nossos especialistas em diversas áreas da medicina.
                </Card.Text>
                <Button as={Link} to="/doctors" variant="outline-primary">
                  Ver Médicos
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <FaCalendarCheck size={50} className="mb-3 text-primary" />
                <Card.Title>Agendamento Online</Card.Title>
                <Card.Text>
                  Marque consultas e exames de forma rápida e fácil pelo nosso site.
                </Card.Text>
                <Button as={Link} to="/appointment" variant="outline-primary">
                  Agendar Agora
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <FaHospital size={50} className="mb-3 text-primary" />
                <Card.Title>Departamentos</Card.Title>
                <Card.Text>
                  Conheça nossos departamentos especializados e serviços médicos.
                </Card.Text>
                <Button as={Link} to="/departments" variant="outline-primary">
                  Explorar
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <FaQuestion size={50} className="mb-3 text-primary" />
                <Card.Title>FAQ</Card.Title>
                <Card.Text>
                  Perguntas frequentes sobre nossos serviços e procedimentos.
                </Card.Text>
                <Button as={Link} to="/faq" variant="outline-primary">
                  Dúvidas
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Nova seção parallax sobre IA na saúde */}
        <div className="fade-in-section">
          <ParallaxSection 
            backgroundImage="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            height="500px"
            backgroundColor="rgba(0, 45, 91, 0.75)"
          >
            <Container>
              <Row>
                <Col md={8} className="mx-auto text-center">
                  <h2 className="mb-4">Inteligência Artificial Revolucionando a Medicina</h2>
                  <p className="lead mb-4">
                    Utilizamos tecnologia de ponta para diagnósticos precoces e tratamentos personalizados, 
                    aumentando significativamente a chance de sucesso e melhorando a qualidade de vida dos nossos pacientes.
                  </p>
                  <Button as={Link} to="/ai-healthcare" variant="light" size="lg">
                    Descubra como a IA está salvando vidas
                  </Button>
                </Col>
              </Row>
            </Container>
          </ParallaxSection>
        </div>

        {/* Seção sobre avanços médicos */}
        <div className="fade-in-section">
          <MedicalAdvancesSection />
        </div>

        {/* Últimas notícias - Substituído por componente dedicado */}
        <div className="fade-in-section">
          <LatestNews limit={3} />
        </div>

        {/* Segunda seção parallax sobre medicina preventiva */}
        <div className="fade-in-section">
          <ParallaxSection 
            backgroundImage="https://images.unsplash.com/photo-1576670156279-226977d96e87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            height="450px"
            backgroundColor="rgba(0, 0, 0, 0.6)"
          >
            <Container>
              <Row>
                <Col md={6} className="ms-auto">
                  <h2 className="mb-3">Medicina Preventiva e Preditiva</h2>
                  <p className="lead mb-4">
                    Nossa abordagem avançada permite identificar fatores de risco e prever 
                    condições médicas antes que se desenvolvam, possibilitando intervenções 
                    preventivas personalizadas.
                  </p>
                  <div className="d-flex">
                    <div className="me-4">
                      <h3 className="text-warning">87%</h3>
                      <p>de precisão em predições de risco</p>
                    </div>
                    <div>
                      <h3 className="text-warning">62%</h3>
                      <p>de redução em hospitalizações</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxSection>
        </div>

        {/* Seção sobre IA na saúde */}
        <div className="fade-in-section">
          <AIHealthcareSection />
        </div>

        {/* Terceira seção parallax sobre o futuro da medicina */}
        <div className="fade-in-section">
          <ParallaxSection 
            backgroundImage="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            height="500px"
            backgroundColor="rgba(82, 3, 78, 0.7)"
          >
            <Container className="text-center">
              <h2 className="mb-4">O Futuro da Medicina Está Aqui</h2>
              <p className="lead mb-4">
                Da edição genética à nanomedicina, estamos na vanguarda dos avanços médicos 
                que estão transformando o tratamento de doenças até então incuráveis.
              </p>
              <Row className="justify-content-center">
                <Col md={3} className="mb-4">
                  <div className="future-stat">
                    <h3>2025</h3>
                    <p>Órgãos bioimpressos</p>
                  </div>
                </Col>
                <Col md={3} className="mb-4">
                  <div className="future-stat">
                    <h3>2026</h3>
                    <p>Terapia genética personalizada</p>
                  </div>
                </Col>
                <Col md={3} className="mb-4">
                  <div className="future-stat">
                    <h3>2027</h3>
                    <p>Nanorrobôs terapêuticos</p>
                  </div>
                </Col>
                <Col md={3} className="mb-4">
                  <div className="future-stat">
                    <h3>2030</h3>
                    <p>Medicina regenerativa avançada</p>
                  </div>
                </Col>
              </Row>
              <Button as={Link} to="/future-medicine" variant="outline-light" size="lg" className="mt-3">
                Explorando fronteiras médicas
              </Button>
            </Container>
          </ParallaxSection>
        </div>

        {/* Seção sobre o futuro da saúde */}
        <div className="fade-in-section">
          <FutureHealthSection />
        </div>

        <Row className="mt-5">
          <Col md={6}>
            <h3>Sobre o Hospital Sistema</h3>
            <p>
              Fundado em 2023, o Hospital Sistema tem se dedicado a oferecer serviços 
              de saúde de excelência para toda a comunidade. Nossa equipe de profissionais 
              altamente qualificados está comprometida em proporcionar o melhor atendimento 
              com tecnologia de ponta.
            </p>
            <p>
              Nossa missão é promover saúde e bem-estar a todos os pacientes, com atendimento 
              humanizado e tratamentos eficazes.
            </p>
            <Button as={Link} to="/sobre" variant="primary">
              Leia mais
            </Button>
          </Col>
          <Col md={6}>
            <h3>Horário de Atendimento</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Segunda - Sexta</td>
                  <td>07:00 - 20:00</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>08:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td>08:00 - 13:00</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Emergência:</strong> 24 horas por dia, todos os dias</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
