const express = require('express');
const { protect } = require('../middleware/auth');

// Aqui seriam importados os controladores, que ainda criaremos
// const { getAppointments, getAppointment, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointments');

const router = express.Router();

// Rotas temporárias para teste
router.get('/', protect, (req, res) => {
  res.status(200).json({ success: true, message: 'Lista de consultas' });
});

router.get('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `Consulta ${req.params.id}` });
});

router.post('/', protect, (req, res) => {
  res.status(201).json({ success: true, message: 'Consulta criada com sucesso' });
});

router.put('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `Consulta ${req.params.id} atualizada` });
});

router.delete('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `Consulta ${req.params.id} cancelada` });
});

module.exports = router;
