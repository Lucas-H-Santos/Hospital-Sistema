const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Listar consultas — paciente vê apenas as suas, admin/médico vê todas
router.get('/', protect, async (req, res) => {
  try {
    const filter = (req.user.role === 'paciente')
      ? { patient: req.user.id }
      : {};
    const appointments = await Appointment.find(filter);
    res.status(200).json({ success: true, data: appointments });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

// Obter uma consulta — somente o próprio paciente, médico ou admin
router.get('/:id', protect, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Consulta não encontrada' });
    }
    const isOwner = appointment.patient.toString() === req.user.id;
    const isPrivileged = ['médico', 'admin'].includes(req.user.role);
    if (!isOwner && !isPrivileged) {
      return res.status(403).json({ success: false, error: 'Acesso não autorizado' });
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

// Criar consulta — paciente cria para si mesmo
router.post('/', protect, async (req, res) => {
  try {
    req.body.patient = req.user.id;
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

// Atualizar consulta — somente o próprio paciente ou admin
router.put('/:id', protect, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Consulta não encontrada' });
    }
    const isOwner = appointment.patient.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, error: 'Acesso não autorizado' });
    }
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

// Cancelar/excluir consulta — somente o próprio paciente ou admin
router.delete('/:id', protect, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ success: false, error: 'Consulta não encontrada' });
    }
    const isOwner = appointment.patient.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, error: 'Acesso não autorizado' });
    }
    await appointment.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
});

module.exports = router;
