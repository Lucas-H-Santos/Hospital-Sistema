import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Form, InputGroup, Badge } from 'react-bootstrap';
import { FaComments, FaPaperPlane, FaTimes, FaArrowRight } from 'react-icons/fa';
import useLocalStorage from './useLocalStorage';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useLocalStorage('hospital-chatbot-messages', [
    {
      id: 1,
      text: 'Olá! Sou o assistente virtual do Hospital Sistema. Como posso ajudá-lo hoje?',
      sender: 'bot',
      showOptions: true,
      options: [
        { id: 'horarios', text: 'Horários de funcionamento' },
        { id: 'agendamento', text: 'Agendar consulta' },
        { id: 'especialidades', text: 'Especialidades médicas' },
        { id: 'planos', text: 'Planos de saúde aceitos' },
        { id: 'contato', text: 'Informações de contato' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTypingIndicator]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Se estiver abrindo o chat e não houver mensagens além da inicial, mostrar menu
    if (!isOpen && messages.length <= 1) {
      resetChat();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    // Adiciona a mensagem do usuário
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    handleBotResponse(inputValue.toLowerCase());
  };

  const handleOptionClick = (optionId, optionText) => {
    // Adiciona a opção escolhida como uma mensagem do usuário
    const userMessage = {
      id: Date.now(),
      text: optionText,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    
    // Processa a resposta com base na opção
    handleBotResponse(optionId);
  };

  // Processa a resposta do bot com indicador de digitação
  const handleBotResponse = (input) => {
    setShowTypingIndicator(true);

    setTimeout(() => {
      setShowTypingIndicator(false);
      
      // Gera resposta e opções baseadas na entrada
      const { response, options, needAssistant } = generateResponseWithOptions(input);
      
      setMessages(prevMessages => [...prevMessages, {
        id: Date.now(),
        text: response,
        sender: 'bot',
        showOptions: options.length > 0,
        options: options,
        needAssistant: needAssistant
      }]);

      // Se precisar de assistente humano, mostrar mensagem adicional após 2 segundos
      if (needAssistant) {
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, {
            id: Date.now(),
            text: "Enquanto isso, posso ajudar com outras informações. Do que mais você precisa?",
            sender: 'bot',
            showOptions: true,
            options: [
              { id: 'menu_principal', text: 'Voltar ao menu principal' },
              { id: 'horarios', text: 'Horários de funcionamento' },
              { id: 'contato', text: 'Informações de contato' }
            ]
          }]);
        }, 2000);
      }
    }, 1500); // Tempo simulando digitação
  };

  // Função para limpar o histórico de conversa
  const handleClearHistory = () => {
    resetChat();
  };

  // Função para reiniciar o chat
  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: 'Olá! Sou o assistente virtual do Hospital Sistema. Como posso ajudá-lo hoje?',
        sender: 'bot',
        showOptions: true,
        options: [
          { id: 'horarios', text: 'Horários de funcionamento' },
          { id: 'agendamento', text: 'Agendar consulta' },
          { id: 'especialidades', text: 'Especialidades médicas' },
          { id: 'planos', text: 'Planos de saúde aceitos' },
          { id: 'contato', text: 'Informações de contato' }
        ]
      }
    ]);
  };

  // Função para gerar respostas e opções de menu
  const generateResponseWithOptions = (input) => {
    // Opções padrão para voltar ao menu
    const defaultOptions = [
      { id: 'menu_principal', text: 'Voltar ao menu principal' },
      { id: 'mais_opcoes', text: 'Mais opções' }
    ];

    // Menu principal
    if (input === 'menu_principal') {
      return {
        response: "O que você gostaria de saber?",
        options: [
          { id: 'horarios', text: 'Horários de funcionamento' },
          { id: 'agendamento', text: 'Agendar consulta' },
          { id: 'especialidades', text: 'Especialidades médicas' },
          { id: 'planos', text: 'Planos de saúde aceitos' },
          { id: 'contato', text: 'Informações de contato' }
        ],
        needAssistant: false
      };
    }
    
    // Horários de funcionamento
    else if (input === 'horarios' || input.includes('horário') || input.includes('funcionamento')) {
      return {
        response: "O hospital funciona 24 horas para emergências. Para consultas eletivas:\n\n• Segunda a Sexta: 7h às 20h\n• Sábados: 8h às 18h\n• Domingos: 8h às 13h",
        options: [
          ...defaultOptions,
          { id: 'estacionamento', text: 'Informações sobre estacionamento' },
          { id: 'visitas', text: 'Horário de visitas' }
        ],
        needAssistant: false
      };
    }
    
    // Agendamento de consultas
    else if (input === 'agendamento' || input.includes('consulta') || input.includes('agendar') || input.includes('marcar')) {
      return {
        response: "Para agendar uma consulta, você tem as seguintes opções:\n\n1. Pelo site: Acesse a seção 'Agendar Consulta'\n2. Por telefone: (11) 3333-4444\n3. Presencialmente na recepção\n\nDeseja agendar uma consulta agora?",
        options: [
          ...defaultOptions,
          { id: 'agendar_agora', text: 'Sim, quero agendar' },
          { id: 'documentos_consulta', text: 'O que levar na consulta?' }
        ],
        needAssistant: false
      };
    }
    
    // Se o usuário quer agendar agora
    else if (input === 'agendar_agora') {
      return {
        response: "Para realizar o agendamento, vou direcioná-lo para um de nossos atendentes. Por favor, aguarde um momento enquanto preparo seu atendimento personalizado.",
        options: [],
        needAssistant: true
      };
    }
    
    // Especialidades médicas
    else if (input === 'especialidades' || input.includes('especialidade') || input.includes('médico') || input.includes('doutor')) {
      return {
        response: "Contamos com diversas especialidades, incluindo:\n\n• Cardiologia\n• Dermatologia\n• Neurologia\n• Ortopedia\n• Pediatria\n• Ginecologia\n• Oftalmologia\n• Oncologia\n\nSobre qual especialidade você gostaria de mais informações?",
        options: [
          ...defaultOptions,
          { id: 'cardiologia', text: 'Cardiologia' },
          { id: 'pediatria', text: 'Pediatria' },
          { id: 'ortopedia', text: 'Ortopedia' }
        ],
        needAssistant: false
      };
    }
    
    // Informações sobre especialidade específica
    else if (input === 'cardiologia') {
      return {
        response: "Nossa equipe de Cardiologia é composta por especialistas em diagnóstico e tratamento de doenças do coração. Realizamos exames como eletrocardiograma, ecocardiograma, teste ergométrico e holter. O departamento é coordenado pelo Dr. João Silva.",
        options: [
          ...defaultOptions,
          { id: 'agendar_cardiologia', text: 'Agendar consulta em Cardiologia' },
          { id: 'especialidades', text: 'Ver outras especialidades' }
        ],
        needAssistant: false
      };
    }
    else if (input === 'pediatria') {
      return {
        response: "Nossa ala de Pediatria funciona 24h e conta com especialistas em diversas áreas da saúde infantil. Temos uma equipe multidisciplinar composta por pediatras, nutricionistas e enfermeiros especializados, coordenada pela Dra. Ana Costa.",
        options: [
          ...defaultOptions,
          { id: 'agendar_pediatria', text: 'Agendar consulta em Pediatria' },
          { id: 'especialidades', text: 'Ver outras especialidades' }
        ],
        needAssistant: false
      };
    }
    else if (input === 'ortopedia') {
      return {
        response: "Nosso departamento de Ortopedia é especializado em diagnóstico e tratamento de doenças e lesões do sistema músculo-esquelético. Realizamos consultas, procedimentos e cirurgias ortopédicas sob coordenação do Dr. Pedro Oliveira.",
        options: [
          ...defaultOptions,
          { id: 'agendar_ortopedia', text: 'Agendar consulta em Ortopedia' },
          { id: 'especialidades', text: 'Ver outras especialidades' }
        ],
        needAssistant: false
      };
    }
    
    // Agendamento de consulta em especialidade específica
    else if (input.startsWith('agendar_')) {
      const specialty = input.replace('agendar_', '');
      return {
        response: `Para agendar uma consulta em ${specialty}, vou direcioná-lo para um de nossos atendentes especializados. Por favor, aguarde um momento.`,
        options: [],
        needAssistant: true
      };
    }
    
    // Planos de saúde
    else if (input === 'planos' || input.includes('plano') || input.includes('convênio') || input.includes('convenio')) {
      return {
        response: "Aceitamos os seguintes planos de saúde:\n\n• Unimed\n• Bradesco Saúde\n• SulAmérica\n• Amil\n• NotreDame Intermédica\n• Porto Seguro\n• Outros convênios mediante consulta\n\nPara verificar a cobertura específica do seu plano, entre em contato com nossa central.",
        options: [
          ...defaultOptions,
          { id: 'contato', text: 'Informações de contato' },
          { id: 'particular', text: 'Atendimento particular' }
        ],
        needAssistant: false
      };
    }
    
    // Atendimento particular
    else if (input === 'particular' || input.includes('preço') || input.includes('valor') || input.includes('custo')) {
      return {
        response: "Oferecemos atendimento particular para todas as especialidades. Os valores variam de acordo com o tipo de consulta, exame ou procedimento. Para informações detalhadas sobre valores, entre em contato com nossa central de atendimento: (11) 3333-4444.",
        options: [
          ...defaultOptions,
          { id: 'contato', text: 'Informações de contato' },
          { id: 'planos', text: 'Planos de saúde aceitos' }
        ],
        needAssistant: false
      };
    }
    
    // Contato
    else if (input === 'contato' || input.includes('telefone') || input.includes('endereço') || input.includes('endereco') || input.includes('localização')) {
      return {
        response: "Informações de contato:\n\n• Endereço: Av. Principal, 1000, Centro, São Paulo - SP\n• Telefone geral: (11) 3333-4444\n• Emergência: (11) 4444-5555\n• E-mail: contato@hospital.com\n\nPara mais detalhes, acesse a seção 'Contato' do nosso site.",
        options: [
          ...defaultOptions,
          { id: 'estacionamento', text: 'Informações sobre estacionamento' },
          { id: 'como_chegar', text: 'Como chegar ao hospital' }
        ],
        needAssistant: false
      };
    }
    
    // Estacionamento
    else if (input === 'estacionamento' || input.includes('estacionar') || input.includes('vaga')) {
      return {
        response: "Oferecemos estacionamento próprio com manobrista. A primeira hora é gratuita para pacientes com consulta marcada. Após esse período, os valores são:\n\n• Até 3 horas: R$10,00\n• Diária: R$25,00\n\nAceitamos pagamentos em dinheiro e cartão.",
        options: [
          ...defaultOptions,
          { id: 'contato', text: 'Informações de contato' },
          { id: 'como_chegar', text: 'Como chegar ao hospital' }
        ],
        needAssistant: false
      };
    }
    
    // Como chegar
    else if (input === 'como_chegar') {
      return {
        response: "Para chegar ao hospital:\n\n• De carro: Fácil acesso pelas principais avenidas da cidade\n• Transporte público: Estamos a 300m da estação de metrô Centro e diversas linhas de ônibus param em frente ao hospital\n• Acessibilidade: Possuímos rampas e elevadores para acesso facilitado",
        options: [
          ...defaultOptions,
          { id: 'estacionamento', text: 'Informações sobre estacionamento' }
        ],
        needAssistant: false
      };
    }
    
    // Visitas a pacientes internados
    else if (input === 'visitas' || input.includes('visita') || input.includes('internado') || input.includes('internação')) {
      return {
        response: "Horários de visita para pacientes internados:\n\n• Apartamentos e enfermarias: 10h às 12h e 16h às 20h\n• UTI: 11h às 11h30 e 17h às 17h30\n\nMáximo de 2 visitantes por paciente. Crianças menores de 12 anos não podem realizar visitas.",
        options: [
          ...defaultOptions,
          { id: 'regras_visita', text: 'Regras para visitantes' }
        ],
        needAssistant: false
      };
    }
    
    // Regras para visitantes
    else if (input === 'regras_visita') {
      return {
        response: "Regras para visitantes:\n\n• Apresentar documento com foto na recepção\n• Utilizar o crachá de visitante durante toda a permanência\n• Higienizar as mãos ao entrar e sair do quarto\n• Respeitar o limite de visitantes por paciente\n• Evitar trazer alimentos sem autorização da equipe médica",
        options: [
          ...defaultOptions,
          { id: 'visitas', text: 'Horários de visita' }
        ],
        needAssistant: false
      };
    }
    
    // O que levar na consulta
    else if (input === 'documentos_consulta') {
      return {
        response: "Para sua consulta, é importante trazer:\n\n• Documento com foto (RG ou CNH)\n• Cartão do convênio (se possuir)\n• Pedido médico (para exames ou procedimentos)\n• Exames anteriores relacionados\n• Lista de medicamentos em uso\n\nRecomendamos chegar com 15 minutos de antecedência.",
        options: [
          ...defaultOptions,
          { id: 'agendamento', text: 'Voltar a Agendamento' }
        ],
        needAssistant: false
      };
    }
    
    // Mais opções
    else if (input === 'mais_opcoes') {
      return {
        response: "Aqui estão mais informações que posso oferecer:",
        options: [
          { id: 'menu_principal', text: 'Menu principal' },
          { id: 'exames', text: 'Exames e resultados' },
          { id: 'emergencia', text: 'Atendimento de emergência' },
          { id: 'covid', text: 'Protocolo COVID-19' },
          { id: 'wifi', text: 'WiFi no hospital' }
        ],
        needAssistant: false
      };
    }

    // Resultados de exames
    else if (input === 'exames' || input.includes('exame') || input.includes('resultado') || input.includes('laudo')) {
      return {
        response: "Os resultados dos exames ficam disponíveis no nosso portal online em até 5 dias úteis após a realização. Para acessá-los:\n\n1. Acesse portal.hospital.com\n2. Faça login com seu CPF e data de nascimento\n3. Clique em 'Meus Exames'\n\nTambém é possível retirar os resultados impressos na recepção.",
        options: [
          ...defaultOptions,
          { id: 'preparar_exames', text: 'Preparação para exames' }
        ],
        needAssistant: false
      };
    }
    
    // Preparação para exames
    else if (input === 'preparar_exames') {
      return {
        response: "A preparação varia de acordo com o exame. Após o agendamento, você receberá instruções específicas por e-mail ou SMS. Para exames de sangue geralmente é necessário jejum, enquanto exames de imagem podem exigir preparo intestinal ou suspensão de alguns medicamentos.",
        options: [
          ...defaultOptions,
          { id: 'exames', text: 'Voltar a Exames' }
        ],
        needAssistant: false
      };
    }

    // Atendimento de emergência
    else if (input === 'emergencia' || input.includes('emergência') || input.includes('urgência') || input.includes('pronto-socorro')) {
      return {
        response: "Nosso pronto-socorro funciona 24h, todos os dias da semana. O atendimento é realizado por ordem de prioridade (Protocolo Manchester), e não por ordem de chegada. Em caso de emergência, dirija-se à entrada específica do pronto-socorro (portão lateral) ou ligue para (11) 4444-5555.",
        options: [
          ...defaultOptions,
          { id: 'tempo_espera', text: 'Tempo médio de espera' }
        ],
        needAssistant: false
      };
    }
    
    // Protocolo COVID-19
    else if (input === 'covid' || input.includes('covid') || input.includes('corona')) {
      return {
        response: "Protocolo COVID-19:\n\n• Triagem na entrada para todos os pacientes\n• Uso de máscara obrigatório em áreas específicas\n• Álcool em gel disponível em todos os ambientes\n• Atendimento separado para pacientes com sintomas respiratórios\n• Testagem disponível com agendamento prévio",
        options: [
          ...defaultOptions,
          { id: 'vacinas', text: 'Informações sobre vacinas' }
        ],
        needAssistant: false
      };
    }
    
    // Informações de WiFi
    else if (input === 'wifi' || input.includes('internet') || input.includes('conexão')) {
      return {
        response: "Oferecemos WiFi gratuito em todas as áreas do hospital. Para acessar:\n\n• Rede: Hospital_Visitantes\n• Senha: bem-vindo2023\n\nA navegação é limitada a 2 horas por dispositivo.",
        options: [
          ...defaultOptions
        ],
        needAssistant: false
      };
    }

    // Comando de limpar conversa
    else if (input.includes('limpar') || input.includes('reiniciar')) {
      return {
        response: "Conversa reiniciada! Como posso ajudá-lo hoje?",
        options: [
          { id: 'horarios', text: 'Horários de funcionamento' },
          { id: 'agendamento', text: 'Agendar consulta' },
          { id: 'especialidades', text: 'Especialidades médicas' },
          { id: 'planos', text: 'Planos de saúde aceitos' },
          { id: 'contato', text: 'Informações de contato' }
        ],
        needAssistant: false
      };
    }

    // Respostas para cumprimentos
    else if (input.includes('olá') || input.includes('oi') || input.includes('bom dia') || input.includes('boa tarde') || input.includes('boa noite')) {
      return {
        response: "Olá! Em que posso ajudá-lo hoje?",
        options: [
          { id: 'horarios', text: 'Horários de funcionamento' },
          { id: 'agendamento', text: 'Agendar consulta' },
          { id: 'especialidades', text: 'Especialidades médicas' },
          { id: 'planos', text: 'Planos de saúde aceitos' },
          { id: 'contato', text: 'Informações de contato' }
        ],
        needAssistant: false
      };
    }
    
    // Respostas para despedidas
    else if (input.includes('tchau') || input.includes('adeus') || input.includes('até logo')) {
      return {
        response: "Até logo! Se precisar de mais informações, estarei por aqui. Desejamos saúde e bem-estar para você e sua família!",
        options: [
          { id: 'menu_principal', text: 'Voltar ao menu principal' }
        ],
        needAssistant: false
      };
    }
    
    // Agradecimentos
    else if (input.includes('obrigado') || input.includes('obrigada') || input.includes('agradecido') || input.includes('valeu')) {
      return {
        response: "Por nada! Estou aqui para ajudar. Tem mais alguma dúvida sobre nosso hospital?",
        options: [
          { id: 'menu_principal', text: 'Voltar ao menu principal' },
          { id: 'mais_opcoes', text: 'Mais opções' }
        ],
        needAssistant: false
      };
    }

    // Para qualquer outra consulta que não foi reconhecida
    else {
      return {
        response: "Desculpe, não consegui entender completamente sua pergunta. Para melhor atendimento, você gostaria de falar com um de nossos atendentes?",
        options: [
          { id: 'falar_atendente', text: 'Sim, falar com atendente' },
          { id: 'menu_principal', text: 'Não, voltar ao menu' }
        ],
        needAssistant: false
      };
    }
  };
  
  // Para encaminhar para atendente
  const handleFalarAtendente = () => {
    setMessages(prevMessages => [...prevMessages, {
      id: Date.now(),
      text: "Vou encaminhá-lo para um de nossos atendentes. Por favor, aguarde um momento enquanto preparo seu atendimento personalizado.",
      sender: 'bot',
      needAssistant: true,
      showOptions: false
    }]);
    
    // Simulação de aviso após 2 segundos
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, {
        id: Date.now(),
        text: "Enquanto isso, posso ajudar com outras informações. Do que mais você precisa?",
        sender: 'bot',
        showOptions: true,
        options: [
          { id: 'menu_principal', text: 'Voltar ao menu principal' },
          { id: 'horarios', text: 'Horários de funcionamento' },
          { id: 'contato', text: 'Informações de contato' }
        ]
      }]);
    }, 2000);
  };

  return (
    <>
      <div className={`chat-bot-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-bot-toggle" onClick={toggleChat}>
          {isOpen ? 
            <FaTimes size={20} /> : 
            <FaComments size={20} />
          }
        </div>
        
        {isOpen && (
          <Card className="chat-bot-card">
            <Card.Header className="chat-bot-header">
              <h5 className="mb-0">Assistente do Hospital</h5>
              <div className="chat-controls">
                <Button 
                  variant="link" 
                  className="text-white me-2 clear-btn" 
                  title="Nova conversa"
                  onClick={handleClearHistory}
                >
                  Nova conversa
                </Button>
                <Button 
                  variant="link" 
                  className="text-white close-btn" 
                  onClick={toggleChat}
                  aria-label="Fechar chat"
                >
                  <FaTimes />
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="chat-bot-body">
              <div className="messages-container">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div 
                      className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
                    >
                      {message.text}
                      
                      {message.needAssistant && (
                        <div className="assistant-notice mt-2">
                          <Badge bg="warning" text="dark">Solicitação de atendimento enviada</Badge>
                        </div>
                      )}
                    </div>
                    
                    {message.showOptions && message.options && message.options.length > 0 && (
                      <div className="options-container">
                        {message.options.map(option => (
                          <Button
                            key={option.id}
                            variant="outline-primary"
                            size="sm"
                            className="option-button"
                            onClick={() => handleOptionClick(option.id, option.text)}
                          >
                            {option.text} <FaArrowRight size={10} className="ms-1" />
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {showTypingIndicator && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </Card.Body>
            <Card.Footer className="chat-bot-footer p-2">
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" variant="primary">
                    <FaPaperPlane />
                  </Button>
                </InputGroup>
              </Form>
            </Card.Footer>
          </Card>
        )}
      </div>
    </>
  );
};

export default ChatBot;
