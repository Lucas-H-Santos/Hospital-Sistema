const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  specialty: {
    type: String,
    required: [true, 'Por favor, forneça uma especialidade'],
    trim: true
  },
  licenseNumber: {
    type: String,
    required: [true, 'Por favor, forneça o número do registro profissional'],
    unique: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    from: Date,
    to: Date
  }],
  experience: [{
    title: String,
    hospital: String,
    location: String,
    from: Date,
    to: Date,
    current: Boolean,
    description: String
  }],
  bio: {
    type: String
  },
  profileImage: {
    type: String,
    default: 'default.jpg'
  },
  schedule: [{
    day: {
      type: String,
      enum: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    },
    startTime: String,
    endTime: String,
    isAvailable: {
      type: Boolean,
      default: true
    }
  }],
  averageRating: {
    type: Number,
    min: [1, 'Avaliação deve ser pelo menos 1'],
    max: [5, 'Avaliação não pode ser mais que 5']
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String,
      rating: Number,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('Doctor', DoctorSchema);
