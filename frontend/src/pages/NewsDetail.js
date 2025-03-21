import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaArrowLeft, FaShareAlt, FaPrint, FaTag } from 'react-icons/fa';
import '../components/news/LatestNews.css';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState([]);
  
  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      // Dados mockup para a notícia sendo visualizada
      const newsData = {
        id: Number(id),
        title: 'Campanha de Vacinação contra Gripe',
        date: '15 de Outubro, 2023',
        image: 'https://images.unsplash.com/photo-1610394822-4ca483a8d312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        content: `
          <p>O Hospital Sistema está promovendo uma campanha de vacinação contra a gripe a partir do dia 20 de outubro de 2023. A campanha tem como objetivo imunizar a população contra os vírus da influenza que circulam com maior intensidade durante o inverno.</p>
          
          <h3>Quem deve se vacinar?</h3>
          <p>A vacinação é recomendada para todos, especialmente para os grupos de risco:</p>
          <ul>
            <li>Idosos acima de 60 anos</li>
            <li>Crianças de 6 meses a 5 anos</li>
            <li>Gestantes e puérperas</li>
            <li>Profissionais de saúde</li>
            <li>Pessoas com doenças crônicas</li>
          </ul>
          
          <h3>Onde e quando?</h3>
          <p>As vacinas serão aplicadas de segunda a sexta-feira, das 8h às 17h, no ambulatório do Hospital Sistema. Não é necessário agendamento, basta comparecer com documento com foto e cartão de vacinação, se tiver.</p>
          
          <h3>Benefícios da vacinação</h3>
          <p>A vacina contra a gripe é uma das formas mais eficazes de prevenir a doença e suas complicações. Ela ajuda a reduzir as chances de hospitalização e morte, especialmente entre os grupos de risco.</p>
          
          <h3>Efeitos colaterais</h3>
          <p>A vacina contra a gripe é segura e geralmente apresenta poucos efeitos colaterais. Os mais comuns são dor e vermelhidão no local da aplicação, que desaparecem em poucos dias.</p>
          
          <p>Não deixe para depois! Proteja-se e proteja sua família contra a gripe.</p>
          
          <p><strong>Observação:</strong> A vacina disponível protege contra as cepas de vírus mais prevalentes na temporada, conforme recomendação da Organização Mundial da Saúde.</p>
        `,
        category: 'Campanhas',
        tags: ['Vacinação', 'Prevenção', 'Saúde Pública'],
        author: 'Dr. Carlos Silva',
        authorPosition: 'Diretor Médico'
      };
      
      // Dados mockup para notícias relacionadas
      const relatedNewsData = [
        {
          id: 3,
          title: 'Palestras sobre Saúde Mental',
          date: '20 de Setembro, 2023',
          image: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          excerpt: 'Série de palestras gratuitas sobre saúde mental e bem-estar emocional.',
          category: 'Eventos'
        },
        {
          id: 5,
          title: 'Programa de Saúde para Idosos',
          date: '1 de Setembro, 2023',
          image: 'https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          excerpt: 'Lançamento do programa especial de acompanhamento de saúde para pessoas da terceira idade.',
          category: 'Programas'
        }
      ];
      
      setNews(newsData);
      setRelatedNews(relatedNewsData);
      setLoading(false);
    }, 800);
  }, [id]);
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      })
      .catch(error => console.log('Erro ao compartilhar:', error));
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      alert('Link copiado para a área de transferência!');
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-3">Carregando notícia...</p>
      </Container>
    );
  }
  
  if (!news) {
    return (
      <Container className="py-5 text-center">
        <h2>Notícia não encontrada</h2>
        <p>A notícia que você está procurando não existe ou foi removida.</p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/noticias')}
        >
          Voltar para notícias
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4 news-detail-page">
      {/* Botão voltar e ações */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button 
          variant="light" 
          onClick={() => navigate('/noticias')}
          className="back-button"
        >
          <FaArrowLeft className="me-2" /> Voltar para notícias
        </Button>
        
        <div>
          <Button variant="outline-primary" className="me-2" onClick={handleShare}>
            <FaShareAlt className="me-2" /> Compartilhar
          </Button>
          <Button variant="outline-secondary" onClick={handlePrint}>
            <FaPrint className="me-2" /> Imprimir
          </Button>
        </div>
      </div>
      
      <Row>
        <Col lg={8}>
          {/* Conteúdo principal da notícia */}
          <div className="news-content bg-white p-4 rounded shadow-sm mb-4">
            <h1 className="mb-3">{news.title}</h1>
            
            <div className="news-meta d-flex flex-wrap align-items-center mb-4">
              <span className="date me-4">
                <FaCalendarAlt className="me-2" /> {news.date}
              </span>
              
              <span className="category me-4">
                <Badge bg="primary">{news.category}</Badge>
              </span>
              
              <span className="author">
                Por: <strong>{news.author}</strong>, {news.authorPosition}
              </span>
            </div>
            
            <div className="news-image-container mb-4">
              <img 
                src={news.image} 
                alt={news.title} 
                className="img-fluid rounded"
              />
            </div>
            
            <div className="news-body" dangerouslySetInnerHTML={{ __html: news.content }} />
            
            {/* Tags */}
            {news.tags && news.tags.length > 0 && (
              <div className="news-tags mt-4">
                <FaTag className="me-2" />
                {news.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    bg="light" 
                    text="dark" 
                    className="me-2 py-2 px-3"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Col>
        
        <Col lg={4}>
          {/* Sidebar com notícias relacionadas */}
          <div className="sidebar">
            <Card className="mb-4">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">Notícias Relacionadas</h5>
              </Card.Header>
              <Card.Body>
                {relatedNews.length > 0 ? (
                  relatedNews.map(item => (
                    <div key={item.id} className="related-news-item mb-3">
                      <Row className="g-0">
                        <Col xs={4}>
                          <Link to={`/noticias/${item.id}`}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="img-fluid rounded"
                            />
                          </Link>
                        </Col>
                        <Col xs={8} className="ps-3">
                          <h6>
                            <Link 
                              to={`/noticias/${item.id}`} 
                              className="text-decoration-none text-dark"
                            >
                              {item.title}
                            </Link>
                          </h6>
                          <div className="small text-muted">
                            <FaCalendarAlt className="me-1" size={12} /> {item.date}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  <p className="mb-0">Não há notícias relacionadas no momento.</p>
                )}
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header className="bg-light">
                <h5 className="mb-0">Categorias</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap">
                  <Button 
                    as={Link} 
                    to="/noticias?category=Campanhas" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Campanhas
                  </Button>
                  <Button 
                    as={Link} 
                    to="/noticias?category=Eventos" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Eventos
                  </Button>
                  <Button 
                    as={Link} 
                    to="/noticias?category=Infraestrutura" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Infraestrutura
                  </Button>
                  <Button 
                    as={Link} 
                    to="/noticias?category=Pesquisa" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Pesquisa
                  </Button>
                  <Button 
                    as={Link} 
                    to="/noticias?category=Programas" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Programas
                  </Button>
                  <Button 
                    as={Link} 
                    to="/noticias?category=Tecnologia" 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2 mb-2"
                  >
                    Tecnologia
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetail;
