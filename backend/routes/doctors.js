const express = require('express');
const { protect, authorize } = require('../middleware/auth');

// Aqui seriam importados os controladores, que ainda criaremos
// const { getDoctors, getDoctor, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctors');

const router = express.Router();

// Rotas temporárias para teste
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Lista de médicos' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Médico ${req.params.id}` });
});

router.post('/', protect, authorize('admin'), (req, res) => {
  res.status(201).json({ success: true, message: 'Médico cadastrado com sucesso' });
});

router.put('/:id', protect, authorize('admin', 'médico'), (req, res) => {
  res.status(200).json({ success: true, message: `Médico ${req.params.id} atualizado` });
});

router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `Médico ${req.params.id} removido` });
});

module.exports = router;
