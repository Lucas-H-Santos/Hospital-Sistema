import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import '../components/news/LatestNews.css';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dados mockup para a página de notícias
  const allNews = [
    {
      id: 1,
      title: 'Campanha de Vacinação',
      date: '15 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1610394822-4ca483a8d312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Participe da nossa campanha de vacinação contra gripe. Disponível para todas as idades.',
      category: 'Campanhas',
      active: true
    },
    {
      id: 2,
      title: 'Inauguração do Novo Centro Pediátrico',
      date: '5 de Outubro, 2023',
      image: 'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Com equipamentos modernos e espaço lúdico para crianças, nosso novo centro pediátrico já está em funcionamento.',
      category: 'Infraestrutura',
      active: true
    },
    {
      id: 3,
      title: 'Palestras sobre Saúde Mental',
      date: '20 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Série de palestras gratuitas sobre saúde mental e bem-estar emocional.',
      category: 'Eventos',
      active: true
    },
    {
      id: 4,
      title: 'Novas Instalações de Fisioterapia',
      date: '10 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Conheça nossas novas instalações de fisioterapia com equipamentos de última geração.',
      category: 'Infraestrutura',
      active: true
    },
    {
      id: 5,
      title: 'Programa de Saúde para Idosos',
      date: '1 de Setembro, 2023',
      image: 'https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lançamento do programa especial de acompanhamento de saúde para pessoas da terceira idade.',
      category: 'Programas',
      active: true
    },
    {
      id: 6,
      title: 'Novos Médicos Especialistas',
      date: '25 de Agosto, 2023',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Nossa equipe médica cresceu! Conheça os novos especialistas que se juntaram ao nosso hospital.',
      category: 'Equipe',
      active: true
    },
    {
      id: 7,
      title: 'Tecnologia de Ponta em Diagnósticos',
      date: '15 de Agosto, 2023',
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Novos equipamentos para diagnósticos de alta precisão já estão em operação no nosso centro de imagens.',
      category: 'Tecnologia',
      active: true
    },
    {
      id: 8,
      title: 'Parcerias com Universidades para Pesquisa',
      date: '5 de Agosto, 2023',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Firmamos parcerias com importantes universidades para desenvolver pesquisas médicas avançadas.',
      category: 'Pesquisa',
      active: true
    }
  ];

  // Filtrar notícias com base na pesquisa
  const filteredNews = allNews
    .filter(item => item.active)
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  // Extrair categorias únicas para filtros
  const categories = [...new Set(allNews.map(item => item.category))];

  return (
    <Container className="py-4">
      <h1 className="mb-4">Notícias e Atualizações</h1>
      
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              placeholder="Buscar notícias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap justify-content-md-end mt-3 mt-md-0">
            <Button 
              variant={searchTerm === '' ? 'primary' : 'outline-primary'}
              className="me-2 mb-2"
              onClick={() => setSearchTerm('')}
            >
              Todas
            </Button>
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={searchTerm === category ? 'primary' : 'outline-primary'}
                className="me-2 mb-2"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      
      {filteredNews.length > 0 ? (
        <Row>
          {filteredNews.map(item => (
            <Col key={item.id} md={6} lg={4} className="mb-4">
              <Card className="latest-news-card h-100">
                <div className="news-img-container">
                  <Card.Img variant="top" src={item.image} alt={item.title} className="news-img" />
                </div>
                <Card.Body>
                  <Card.Title className="news-title">{item.title}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="news-category">{item.category}</span>
                    <span className="news-date">
                      <FaCalendarAlt className="me-1" /> {item.date}
                    </span>
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
      ) : (
        <div className="text-center py-5">
          <h3>Nenhuma notícia encontrada</h3>
          <p>Tente ajustar os critérios de busca.</p>
          <Button 
            variant="primary" 
            onClick={() => setSearchTerm('')}
          >
            Ver todas as notícias
          </Button>
        </div>
      )}
    </Container>
  );
};

export default NewsPage;
