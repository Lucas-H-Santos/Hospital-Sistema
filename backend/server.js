const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Carregar variáveis de ambiente
dotenv.config({ path: '../.env' }); // Adjust the path if necessary

// Fix mongoose strictQuery warning
mongoose.set('strictQuery', false);

// Use the environment variable for MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  })
  .catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err.message);
  });

const app = express();

// Middleware
app.use(express.json({ limit: '10kb' })); // Limitar tamanho do body
app.use(cookieParser());

// CORS restrito à origem configurada
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(helmet());
app.use(compression());

// Morgan: 'combined' em produção para não expor dados sensíveis via 'dev'
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/departments', require('./routes/departments'));

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API do Hospital funcionando!' });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Erro no servidor',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // Para testes
