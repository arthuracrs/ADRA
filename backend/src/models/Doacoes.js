const mongoose = require('mongoose')

const DoacaoSchema = new mongoose.Schema({
  doador_data: {
    doador_id: mongoose.Schema.Types.ObjectId,
    username: String,
    endereco: String,
    cidade: String,
    estado: String
  },
  tipo: String,
  descricao: String,
  data: String,
  horario: String,
  fotos: String
})

module.exports = mongoose.model('Doacoes', DoacaoSchema)