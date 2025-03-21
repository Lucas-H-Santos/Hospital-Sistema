import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, Button, Card } from 'react-bootstrap';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Lista de perguntas frequentes
  const faqs = [
    {
      id: 1,
      question: 'Como posso marcar uma consulta?',
      answer: 'Você pode marcar uma consulta através do nosso site na seção "Agendar Consulta", por telefone (11) 3333-4444 ou presencialmente na recepção do hospital. É necessário informar seus dados pessoais, plano de saúde (se tiver), especialidade desejada e preferência de horário.',
      category: 'agendamento'
    },
    {
      id: 2,
      question: 'O hospital atende planos de saúde?',
      answer: 'Sim, atendemos a maioria dos planos de saúde. Para verificar se o seu plano é aceito, entre em contato com nossa central de atendimento ou consulte a lista completa na seção "Convênios" do nosso site.',
      category: 'planos'
    },
    {
      id: 3,
      question: 'Qual é o horário de funcionamento do hospital?',
      answer: 'O hospital funciona de segunda a sexta das 7h às 20h, sábados das 8h às 18h e domingos das 8h às 13h. O serviço de emergência funciona 24 horas por dia, todos os dias da semana.',
      category: 'funcionamento'
    },
    {
      id: 4,
      question: 'Como devo me preparar para exames específicos?',
      answer: 'A preparação varia conforme o exame. Ao agendar, você receberá instruções específicas. Em geral, exames de sangue requerem jejum, enquanto exames de imagem podem exigir preparo intestinal ou suspensão de certos medicamentos. Em caso de dúvidas, consulte seu médico ou entre em contato com nossa central.',
      category: 'exames'
    },
    {
      id: 5,
      question: 'Posso remarcar ou cancelar minha consulta?',
      answer: 'Sim, você pode remarcar ou cancelar sua consulta com pelo menos 24 horas de antecedência. Isso pode ser feito pelo site, telefone ou presencialmente. É importante respeitar esse prazo para não prejudicar outros pacientes que possam precisar do horário.',
      category: 'agendamento'
    },
    {
      id: 6,
      question: 'O hospital possui estacionamento?',
      answer: 'Sim, o hospital conta com estacionamento próprio com manobrista. Pacientes pagam uma taxa reduzida e a primeira hora é gratuita para quem tem consulta marcada.',
      category: 'funcionamento'
    },
    {
      id: 7,
      question: 'Como posso obter meus resultados de exames?',
      answer: 'Os resultados dos exames ficam disponíveis em nosso portal online. Você também pode retirá-los pessoalmente na recepção do hospital, mediante apresentação de documento com foto.',
      category: 'exames'
    },
    {
      id: 8,
      question: 'O que devo levar no dia da consulta?',
      answer: 'No dia da consulta, é importante trazer um documento com foto, cartão do plano de saúde (se tiver), pedido médico para exames ou procedimentos (se aplicável), e quaisquer exames ou relatórios médicos anteriores que sejam relevantes para sua condição.',
      category: 'agendamento'
    },
    {
      id: 9,
      question: 'O hospital realiza cirurgias?',
      answer: 'Sim, o hospital possui centro cirúrgico completo e realiza diversos tipos de cirurgias, desde as mais simples até procedimentos complexos. Temos equipes médicas especializadas em diferentes áreas cirúrgicas.',
      category: 'procedimentos'
    },
    {
      id: 10,
      question: 'Como funciona o pronto-socorro?',
      answer: 'Nosso pronto-socorro funciona 24 horas por dia, com atendimento por ordem de prioridade (protocolo de Manchester). Casos mais graves são atendidos prioritariamente, independentemente da ordem de chegada.',
      category: 'emergencia'
    },
    {
      id: 11,
      question: 'São permitidas visitas aos pacientes internados?',
      answer: 'Sim, permitimos visitas aos pacientes internados em horários específicos: das 10h às 12h e das 16h às 20h. Cada paciente pode receber até dois visitantes por vez. Em UTIs e unidades especiais, há regras específicas que devem ser consultadas com a equipe de enfermagem.',
      category: 'internacao'
    },
    {
      id: 12,
      question: 'Como funciona o processo de internação?',
      answer: 'Para internações eletivas, o paciente deve comparecer à recepção de internações com documentos pessoais, cartão do plano de saúde, pedido de internação do médico e exames pré-operatórios (se aplicável). Em caso de emergência, a internação é processada diretamente pelo pronto-socorro.',
      category: 'internacao'
    },
    {
      id: 13,
      question: 'O hospital oferece algum tipo de transporte para pacientes?',
      answer: 'Para casos específicos, como pacientes com mobilidade reduzida ou em tratamentos prolongados, oferecemos serviço de ambulância e transporte especial. Este serviço deve ser agendado com antecedência e pode ter cobertura pelo plano de saúde, dependendo do convênio.',
      category: 'funcionamento'
    },
    {
      id: 14,
      question: 'Quais especialidades médicas o hospital atende?',
      answer: 'Nosso hospital conta com profissionais de diversas especialidades, incluindo Cardiologia, Neurologia, Ortopedia, Ginecologia, Pediatria, Dermatologia, Oftalmologia, Oncologia, entre outras. A lista completa pode ser consultada na seção "Especialidades" do nosso site.',
      category: 'especialidades'
    }
  ];
  
  // Filtrar FAQs com base na busca e categoria
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Obter categorias únicas para o filtro
  const categories = [...new Set(faqs.map(faq => faq.category))];
  
  return (
    <Container className="py-4">
      <div className="text-center mb-5">
        <h2 className="mb-3">Perguntas Frequentes</h2>
        <p className="lead">
          Encontre respostas para as perguntas mais comuns sobre nossos serviços e funcionamento.
        </p>
      </div>
      
      <Row className="mb-4">
        <Col lg={8} className="mx-auto">
          <Card className="search-card mb-4">
            <Card.Body>
              <Form>
                <Form.Group className="mb-0">
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Buscar perguntas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary">
                      <FaSearch /> Buscar
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          
          <div className="mb-4 text-center">
            <Button
              variant={activeCategory === 'all' ? 'primary' : 'outline-primary'}
              className="m-1"
              onClick={() => setActiveCategory('all')}
            >
              Todas
            </Button>
            
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? 'primary' : 'outline-primary'}
                className="m-1 text-capitalize"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col lg={8} className="mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion>
              {filteredFAQs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={faq.id}>
                  <Accordion.Header>
                    <div className="d-flex align-items-center">
                      <FaQuestionCircle className="me-3 text-primary" />
                      {faq.question}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-5">
              <FaQuestionCircle size={50} className="text-muted mb-3" />
              <h4>Nenhuma pergunta encontrada</h4>
              <p>Tente outros termos de busca ou categorias</p>
            </div>
          )}
          
          <div className="mt-5">
            <Card>
              <Card.Body>
                <h4>Não encontrou o que procurava?</h4>
                <p>
                  Entre em contato conosco para esclarecer suas dúvidas ou agendar uma consulta.
                </p>
                <div className="d-flex flex-column flex-md-row gap-2">
                  <Button as="a" href="/contact" variant="primary" className="me-md-2">
                    Fale Conosco
                  </Button>
                  <Button as="a" href="/appointment" variant="outline-primary">
                    Agendar Consulta
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

export default FAQ;
