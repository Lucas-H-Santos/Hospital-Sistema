# Hospital Sistema - Plataforma Digital de Saúde

![Hospital Sistema](frontend/public/logo192.png)

## Sobre o Projeto

Hospital Sistema é uma aplicação web completa desenvolvida para modernizar a gestão e experiência do usuário em instituições de saúde. O projeto oferece funcionalidades como agendamento de consultas, acesso a histórico médico, gestão de notícias, sistema de autenticação e muito mais.

## Tecnologias Utilizadas

### Frontend
- **React.js**: Framework JavaScript para desenvolvimento da interface
- **React Router**: Para navegação entre páginas sem recarregar o site
- **Redux**: Gerenciamento de estado global da aplicação
- **React Bootstrap**: Componentes estilizados e responsivos
- **SASS/SCSS**: Pré-processador CSS para estilização avançada
- **Axios**: Biblioteca para chamadas HTTP
- **React Icons**: Conjunto completo de ícones
- **CSS Animations**: Efeitos visuais e animações para melhor UX

### Backend
- **Node.js**: Ambiente de execução JavaScript do lado do servidor
- **Express.js**: Framework web para criação de APIs
- **MongoDB**: Banco de dados não-relacional para armazenamento dos dados
- **Mongoose**: ODM para modelagem de dados e interação com MongoDB
- **JWT**: JSON Web Tokens para autenticação segura
- **Nodemailer**: Envio de emails para notificações e recuperação de senha

## Funcionalidades Principais

### Área do Paciente
- **Sistema de Autenticação**: Login/Registro com validação e recuperação de senha
- **Perfil de Usuário**: Gerenciamento de dados pessoais e médicos
- **Agendamento de Consultas**: Interface intuitiva para marcação de consultas
- **Histórico Médico**: Visualização de consultas passadas e resultados de exames
- **Documentação Digital**: Upload e armazenamento de documentos médicos

### Área Informativa
- **Portal de Notícias**: Sistema de gerenciamento de conteúdo relacionado à saúde
- **Departamentos Médicos**: Visualização detalhada das especialidades disponíveis
- **Corpo Clínico**: Lista de médicos com filtros por especialidade e disponibilidade
- **Serviços Oferecidos**: Informações detalhadas sobre todos os serviços
- **FAQ**: Perguntas frequentes com sistema de busca

### Recursos Técnicos
- **Design Responsivo**: Adaptado para todos os tamanhos de tela
- **Acessibilidade**: Conformidade com diretrizes WCAG para inclusão digital
- **ChatBot**: Assistente virtual para ajudar usuários com informações rápidas
- **Efeitos Visuais**: Parallax scroll, animações em scroll, e transições suaves
- **Lazy Loading**: Carregamento otimizado de componentes e imagens

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v14+)
- MongoDB (v4+)
- NPM ou Yarn

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/hospital-sistema.git
cd hospital-sistema
```

2. Configure o ambiente:
```bash
# Instalar as dependências do projeto
bash setup.sh

# Crie um arquivo .env no diretório backend com as seguintes variáveis:
# PORT=5000
# MONGO_URI=sua_conexao_mongodb
# JWT_SECRET=seu_jwt_secret
# EMAIL_USER=seu_email
# EMAIL_PASS=sua_senha_email
```

### Execução
```bash
# Para iniciar tanto o backend quanto o frontend
bash start_dev.sh

# Alternativamente, para iniciar separadamente:
# Backend
cd backend && npm start

# Frontend
cd frontend && NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Estrutura do Projeto
