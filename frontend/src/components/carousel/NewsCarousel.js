import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import './NewsCarousel.css';

const NewsCarousel = ({ title }) => {
  const news = [
    {
      id: 1,
      title: 'Campanha de Vacinação',
      date: '15 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1610394822-4ca483a8d312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Participe da nossa campanha de vacinação contra gripe. Disponível para todas as idades.',
      link: '/news/1'
    },
    {
      id: 2,
      title: 'Inauguração do Novo Centro Pediátrico',
      date: '5 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Com equipamentos modernos e espaço lúdico para crianças, nosso novo centro pediátrico já está em funcionamento.',
      link: '/news/2'
    },
    {
      id: 3,
      title: 'Palestras sobre Saúde Mental',
      date: '20 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Série de palestras gratuitas sobre saúde mental e bem-estar emocional.',
      link: '/news/3'
    },
    {
      id: 4,
      title: 'Novas Instalações de Fisioterapia',
      date: '10 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Conheça nossas novas instalações de fisioterapia com equipamentos de última geração.',
      link: '/news/4'
    },
    {
      id: 5,
      title: 'Programa de Saúde para Idosos',
      date: '1 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lançamento do programa especial de acompanhamento de saúde para pessoas da terceira idade.',
      link: '/news/5'
    },
    {
      id: 6,
      title: 'Novos Médicos Especialistas',
      date: '25 de Agosto, 2023',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Nossa equipe médica cresceu! Conheça os novos especialistas que se juntaram ao nosso hospital.',
      link: '/news/6'
    }
  ];

  // Agrupar as notícias em grupos de 3 para o carousel
  const chunkedNews = [];
  for (let i = 0; i < news.length; i += 3) {
    chunkedNews.push(news.slice(i, i + 3));
  }

  return (
    <div className="news-carousel-section">
      <h2 className="section-title">{title || 'Notícias e Atualizações'}</h2>
      
      <Carousel indicators={true} interval={5000} className="news-carousel">
        {chunkedNews.map((newsGroup, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <Row>
              {newsGroup.map(item => (
                <Col md={4} key={item.id} className="mb-4">
                  <Card className="news-card h-100">
                    <div className="news-img-container">
                      <Card.Img variant="top" src={item.image} alt={item.title} className="news-img" />
                    </div>
                    <Card.Body>
                      <Card.Title className="news-title">{item.title}</Card.Title>
                      <div className="news-date">
                        <FaCalendarAlt className="me-2" />
                        {item.date}
                      </div>
                      <Card.Text className="news-excerpt">
                        {item.excerpt}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0">
                      <Button 
                        as={Link} 
                        to={item.link} 
                        variant="outline-primary" 
                        className="news-btn"
                      >
                        Leia mais
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="text-center mt-4">
        <Button as={Link} to="/news" variant="primary">
          Ver todas as notícias
        </Button>
      </div>
    </div>
  );
};

export default NewsCarousel;
