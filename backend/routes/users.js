const express = require('express');
const { body } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const User = require('../models/User');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Listar usuários — apenas admin
router.get('/', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: 'Lista de usuários' });
});

// Obter usuário por ID — apenas o próprio usuário ou admin
router.get('/:id', protect, (req, res, next) => {
  if (req.params.id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ success: false, error: 'Acesso não autorizado' });
  }
  res.status(200).json({ success: true, message: `Usuário ${req.params.id}` });
});

// Atualizar usuário — apenas o próprio usuário ou admin
router.put('/:id', protect, (req, res) => {
  if (req.params.id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ success: false, error: 'Acesso não autorizado' });
  }
  res.status(200).json({ success: true, message: `Usuário ${req.params.id} atualizado` });
});

// Excluir usuário — apenas admin
router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `Usuário ${req.params.id} excluído` });
});

// LGPD Art. 18 — Direito à exclusão: o próprio titular solicita apagamento de seus dados
router.delete('/me/delete-account', protect, async (req, res) => {
  try {
    // Anonimizar/apagar consultas do paciente
    await Appointment.deleteMany({ patient: req.user.id });
    // Apagar o usuário
    await User.findByIdAndDelete(req.user.id);
    // Limpar cookie
    res.clearCookie('token');
    res.status(200).json({ success: true, data: 'Conta e dados excluídos conforme solicitado (LGPD Art. 18)' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

module.exports = router;
