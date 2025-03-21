import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Form, Modal, Badge } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaPlus, FaSave, FaCalendarAlt } from 'react-icons/fa';
import './NewsManager.css';

// Dados mockup para notícias (posteriormente serão carregados da API)
const initialNews = [
  {
    id: 1,
    title: 'Campanha de Vacinação',
    date: '15 de Outubro, 2023',
    image: 'https://images.unsplash.com/photo-1610394822-4ca483a8d312',
    excerpt: 'Participe da nossa campanha de vacinação contra gripe. Disponível para todas as idades.',
    content: 'Texto completo da notícia sobre a campanha de vacinação...',
    featured: true,
    active: true
  },
  {
    id: 2,
    title: 'Inauguração do Novo Centro Pediátrico',
    date: '5 de Outubro, 2023',
    image: 'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268',
    excerpt: 'Com equipamentos modernos e espaço lúdico para crianças, nosso novo centro pediátrico já está em funcionamento.',
    content: 'Texto completo da notícia sobre o novo centro pediátrico...',
    featured: true,
    active: true
  },
  {
    id: 3,
    title: 'Palestras sobre Saúde Mental',
    date: '20 de Setembro, 2023',
    image: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb',
    excerpt: 'Série de palestras gratuitas sobre saúde mental e bem-estar emocional.',
    content: 'Texto completo da notícia sobre palestras de saúde mental...',
    featured: false,
    active: true
  },
  // ...demais notícias
];

const NewsManager = () => {
  const [news, setNews] = useState(initialNews);
  const [showModal, setShowModal] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);
  const [viewMode, setViewMode] = useState(false);
  const [validated, setValidated] = useState(false);

  // Manipulação do modal de notícias
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentNews(null);
    setViewMode(false);
    setValidated(false);
  };

  const handleShowModal = (newsItem = null, view = false) => {
    setCurrentNews(newsItem || {
      id: Date.now(),
      title: '',
      date: new Date().toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}),
      image: '',
      excerpt: '',
      content: '',
      featured: false,
      active: true
    });
    setViewMode(view);
    setShowModal(true);
  };

  // Salvar nova notícia ou editar existente
  const handleSaveNews = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (currentNews.id && news.some(n => n.id === currentNews.id)) {
      // Atualizar notícia existente
      setNews(news.map(item => 
        item.id === currentNews.id ? currentNews : item
      ));
    } else {
      // Adicionar nova notícia
      setNews([...news, currentNews]);
    }
    
    handleCloseModal();
  };

  // Excluir notícia
  const handleDeleteNews = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  // Alternar status de destaque
  const toggleFeatured = (id) => {
    setNews(news.map(item => 
      item.id === id ? { ...item, featured: !item.featured } : item
    ));
  };

  // Alternar status ativo/inativo
  const toggleActive = (id) => {
    setNews(news.map(item => 
      item.id === id ? { ...item, active: !item.active } : item
    ));
  };

  // Manipular mudanças no formulário
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentNews({
      ...currentNews,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="news-manager">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gerenciamento de Notícias</h2>
        <Button variant="primary" onClick={() => handleShowModal()}>
          <FaPlus className="me-2" /> Nova Notícia
        </Button>
      </div>

      <Row>
        {news.map(item => (
          <Col key={item.id} md={6} lg={4} className="mb-4">
            <Card className={`news-manager-card h-100 ${!item.active ? 'inactive' : ''}`}>
              <div className="news-img-container">
                <Card.Img variant="top" src={item.image} alt={item.title} />
                {item.featured && 
                  <Badge bg="warning" text="dark" className="featured-badge">
                    Destaque
                  </Badge>
                }
                {!item.active && 
                  <div className="inactive-overlay">Inativo</div>
                }
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div className="news-date mb-2">
                  <FaCalendarAlt className="me-2" /> {item.date}
                </div>
                <Card.Text className="mb-2">{item.excerpt}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white">
                <div className="d-flex justify-content-between">
                  <div>
                    <Button 
                      variant="light" 
                      size="sm" 
                      className="me-1"
                      onClick={() => handleShowModal(item, true)}
                      title="Visualizar"
                    >
                      <FaEye />
                    </Button>
                    <Button 
                      variant="light" 
                      size="sm" 
                      className="me-1"
                      onClick={() => handleShowModal(item)}
                      title="Editar"
                    >
                      <FaEdit />
                    </Button>
                    <Button 
                      variant="light" 
                      size="sm"
                      onClick={() => handleDeleteNews(item.id)}
                      title="Excluir"
                    >
                      <FaTrash />
                    </Button>
                  </div>
                  <div>
                    <Form.Check 
                      type="switch"
                      id={`featured-switch-${item.id}`}
                      label="Destaque"
                      checked={item.featured}
                      onChange={() => toggleFeatured(item.id)}
                      className="mb-1"
                    />
                    <Form.Check 
                      type="switch"
                      id={`active-switch-${item.id}`}
                      label="Ativo"
                      checked={item.active}
                      onChange={() => toggleActive(item.id)}
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {viewMode ? 'Visualizar Notícia' : currentNews && currentNews.id ? 'Editar Notícia' : 'Nova Notícia'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentNews && (
            viewMode ? (
              <div className="news-preview">
                <h2>{currentNews.title}</h2>
                <div className="news-date mb-3">
                  <FaCalendarAlt className="me-2" /> {currentNews.date}
                </div>
                {currentNews.image && (
                  <img 
                    src={currentNews.image} 
                    alt={currentNews.title} 
                    className="w-100 mb-3 rounded"
                    style={{maxHeight: '300px', objectFit: 'cover'}}
                  />
                )}
                <p className="lead">{currentNews.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: currentNews.content.replace(/\n/g, '<br>') }} />
                <div className="d-flex mt-3">
                  {currentNews.featured && (
                    <Badge bg="warning" text="dark" className="me-2">Destaque</Badge>
                  )}
                  {!currentNews.active && (
                    <Badge bg="secondary">Inativo</Badge>
                  )}
                </div>
              </div>
            ) : (
              <Form noValidate validated={validated} onSubmit={handleSaveNews}>
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control 
                    name="title"
                    value={currentNews.title}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Título é obrigatório.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>URL da Imagem</Form.Label>
                  <Form.Control 
                    name="image"
                    value={currentNews.image}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    URL da imagem é obrigatória.
                  </Form.Control.Feedback>
                </Form.Group>
                
                {currentNews.image && (
                  <div className="mb-3">
                    <img 
                      src={currentNews.image} 
                      alt="Preview" 
                      style={{maxHeight: '150px', objectFit: 'cover'}}
                      className="img-thumbnail"
                    />
                  </div>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Resumo</Form.Label>
                  <Form.Control 
                    name="excerpt"
                    value={currentNews.excerpt}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={2}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Resumo é obrigatório.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Conteúdo Completo</Form.Label>
                  <Form.Control 
                    name="content"
                    value={currentNews.content}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={5}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Conteúdo é obrigatório.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Col>
                    <Form.Check
                      type="switch"
                      id="featured-switch"
                      label="Destacar na página inicial"
                      name="featured"
                      checked={currentNews.featured}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="switch"
                      id="active-switch"
                      label="Notícia ativa"
                      name="active"
                      checked={currentNews.active}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
                
                <div className="d-flex justify-content-end mt-4">
                  <Button variant="secondary" onClick={handleCloseModal} className="me-2">
                    Cancelar
                  </Button>
                  <Button variant="primary" type="submit">
                    <FaSave className="me-2" /> Salvar
                  </Button>
                </div>
              </Form>
            )
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewsManager;
