import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './LatestNews.css';

const LatestNews = ({ limit = 3 }) => {
  // Dados mockup para notícias (posteriormente serão carregados da API)
  const allNews = [
    {
      id: 1,
      title: 'Campanha de Vacinação',
      date: '15 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1610394822-4ca483a8d312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Participe da nossa campanha de vacinação contra gripe. Disponível para todas as idades.',
      featured: true,
      active: true
    },
    {
      id: 2,
      title: 'Inauguração do Novo Centro Pediátrico',
      date: '5 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Com equipamentos modernos e espaço lúdico para crianças, nosso novo centro pediátrico já está em funcionamento.',
      featured: true,
      active: true
    },
    {
      id: 3,
      title: 'Palestras sobre Saúde Mental',
      date: '20 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Série de palestras gratuitas sobre saúde mental e bem-estar emocional.',
      featured: false,
      active: true
    }
    // ...demais notícias
  ];

  // Filtrar apenas notícias ativas e limitar à quantidade especificada
  const filteredNews = allNews
    .filter(item => item.active)
    .slice(0, limit);

  return (
    <div className="latest-news-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Últimas Notícias</h2>
        <Button as={Link} to="/noticias" variant="outline-primary" className="see-all-btn">
          Ver todas <FaArrowRight className="ms-2" />
        </Button>
      </div>

      <Row>
        {filteredNews.map(item => (
          <Col key={item.id} md={6} lg={4} className="mb-4">
            <Card className="latest-news-card h-100">
              <div className="news-img-container">
                <Card.Img variant="top" src={item.image} alt={item.title} className="news-img" />
              </div>
              <Card.Body>
                <Card.Title className="news-title">{item.title}</Card.Title>
                <div className="news-date mb-2">
                  <FaCalendarAlt className="me-2" /> {item.date}
                </div>
                <Card.Text className="news-excerpt">
                  {item.excerpt}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button 
                  as={Link} 
                  to={`/noticias/${item.id}`} 
                  variant="outline-primary" 
                  className="read-more-btn"
                >
                  Ler mais
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestNews;
