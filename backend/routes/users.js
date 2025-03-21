const express = require('express');
const { body } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');

// Aqui seriam importados os controladores, que ainda criaremos
// const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/users');

const router = express.Router();

// Rotas temporárias para teste
router.get('/', protect, (req, res) => {
  res.status(200).json({ success: true, message: 'Lista de usuários' });
});

router.get('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `Usuário ${req.params.id}` });
});

router.put('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `Usuário ${req.params.id} atualizado` });
});

router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `Usuário ${req.params.id} excluído` });
});

module.exports = router;
