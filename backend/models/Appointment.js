const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Por favor, forneça uma data para a consulta']
  },
  time: {
    type: String,
    required: [true, 'Por favor, forneça um horário para a consulta']
  },
  duration: {
    type: Number,
    default: 30 // duração em minutos
  },
  reason: {
    type: String,
    required: [true, 'Por favor, forneça o motivo da consulta']
  },
  status: {
    type: String,
    enum: ['agendada', 'confirmada', 'cancelada', 'concluída'],
    default: 'agendada'
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
