const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, forneça um nome'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Por favor, forneça um email'],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Por favor, forneça um email válido'
    ]
  },
  role: {
    type: String,
    enum: ['paciente', 'médico', 'admin'],
    default: 'paciente'
  },
  password: {
    type: String,
    required: [true, 'Por favor, forneça uma senha'],
    minlength: 6,
    select: false // Não retornar a senha nas consultas
  },
  phone: {
    type: String,
    maxlength: [20, 'Número de telefone não pode ter mais de 20 caracteres']
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['masculino', 'feminino', 'outro']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  lastLogin: Date
});

// Criptografar senha antes de salvar
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Verificar se a senha está correta
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Gerar e assinar token JWT
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Gerar e adicionar token de redefinição de senha
UserSchema.methods.getResetPasswordToken = function () {
  // Gerar token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Adicionar token hasheado ao usuário
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Definir prazo de expiração (10 minutos)
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
