import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FeatureCarousel.css';

const FeatureCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'Tratamentos Inovadores',
      description: 'Conheça nossas terapias de ponta e tecnologias avançadas para tratamentos mais eficazes e menos invasivos.',
      image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      link: '/services',
      buttonText: 'Conheça nossos tratamentos'
    },
    {
      id: 2,
      title: 'Psicologia Positiva',
      description: 'Nossa abordagem integra saúde mental e física, com programas de psicologia positiva que promovem bem-estar completo.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      link: '/departments',
      buttonText: 'Conhecer nossa equipe'
    },
    {
      id: 3,
      title: 'Cuidados Especiais para Idosos',
      description: 'Programas dedicados à saúde e qualidade de vida na terceira idade, com médicos especializados em geriatria.',
      image: 'https://images.unsplash.com/photo-1516673618072-0758e16ea156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      link: '/services',
      buttonText: 'Cuidados geriátricos'
    },
    {
      id: 4,
      title: 'Saúde Infantil',
      description: 'Ambiente especialmente projetado para crianças, com pediatras renomados e programas preventivos de saúde infantil.',
      image: 'https://images.unsplash.com/photo-1581088382991-83c7f170de75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      link: '/departments',
      buttonText: 'Nossa pediatria'
    },
    {
      id: 5,
      title: 'Novo Departamento de Neurologia',
      description: 'Inauguramos recentemente nossa área de neurologia com equipamentos de última geração e especialistas renomados.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      link: '/departments',
      buttonText: 'Conhecer o departamento'
    }
  ];

  return (
    <div className="feature-carousel-container">
      <Carousel 
        fade 
        indicators={true} 
        controls={true} 
        interval={6000} 
        className="feature-carousel"
      >
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <div 
              className="carousel-image-container"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption>
              <div className="carousel-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Button 
                  as={Link} 
                  to={item.link} 
                  variant="primary" 
                  className="carousel-btn"
                >
                  {item.buttonText}
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
