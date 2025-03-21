const express = require('express');
const { protect, authorize } = require('../middleware/auth');

// Aqui seriam importados os controladores, que ainda criaremos
// const { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departments');

const router = express.Router();

// Rotas temporárias para teste
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Lista de departamentos' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Departamento ${req.params.id}` });
});

router.post('/', protect, authorize('admin'), (req, res) => {
  res.status(201).json({ success: true, message: 'Departamento criado com sucesso' });
});

router.put('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `Departamento ${req.params.id} atualizado` });
});

router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `Departamento ${req.params.id} removido` });
});

module.exports = router;
