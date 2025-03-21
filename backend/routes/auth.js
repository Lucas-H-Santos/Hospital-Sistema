const express = require('express');
const { body } = require('express-validator');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/register',
  [
    body('name', 'Nome é obrigatório').not().isEmpty(),
    body('email', 'Por favor, inclua um email válido').isEmail(),
    body(
      'password',
      'Por favor, digite uma senha com 6 ou mais caracteres'
    ).isLength({ min: 6 })
  ],
  register
);

router.post(
  '/login',
  [
    body('email', 'Por favor, inclua um email válido').isEmail(),
    body('password', 'Senha é obrigatória').exists()
  ],
  login
);

router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
