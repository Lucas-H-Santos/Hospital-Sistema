const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Rate limit: máximo 10 tentativas por IP a cada 15 minutos
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, error: 'Muitas tentativas. Tente novamente em 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limit mais restritivo para recuperação de senha: 5 por hora
const forgotLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Muitas solicitações de recuperação. Tente novamente em 1 hora.' },
  standardHeaders: true,
  legacyHeaders: false
});

router.post(
  '/register',
  authLimiter,
  [
    body('name', 'Nome é obrigatório').not().isEmpty(),
    body('email', 'Por favor, inclua um email válido').isEmail(),
    body(
      'password',
      'Por favor, digite uma senha com 10 ou mais caracteres'
    ).isLength({ min: 10 })
  ],
  register
);

router.post(
  '/login',
  authLimiter,
  [
    body('email', 'Por favor, inclua um email válido').isEmail(),
    body('password', 'Senha é obrigatória').exists()
  ],
  login
);

router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotLimiter, forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
