const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, forneça um nome para o departamento'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Por favor, forneça uma descrição para o departamento']
  },
  image: {
    type: String,
    default: 'department-default.jpg'
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  location: {
    floor: String,
    wing: String
  },
  contactInfo: {
    email: String,
    phone: String,
    extension: String
  },
  services: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Department', DepartmentSchema);
