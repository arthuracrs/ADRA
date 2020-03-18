const mongoose = require('mongoose')

const PointSchema = require('./utils/PointSchema')

const DoacoesSchema = new mongoose.Schema({
  doador_data: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true
  },
  tipo: String,
  descricao: String,
  data: String,
  horario: String,
  fotos: String
})

module.exports = mongoose.model('Doacoes', DoacoesSchema)