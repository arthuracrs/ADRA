const Doacao = require('../models/Doacoes')
const User = require('../models/Users')

module.exports = {

  async index(request, response) {
    const queryResult = await Doacao.find().populate('doador_data')

    response.send(queryResult)
  },

  async store(request, response) {

    const { doador_id, tipo, descricao, data, horario, fotos } = request.body

    //@arthurc_bot
    const newDoacao = await Doacao.create({
      doador_data: doador_id,
      tipo,
      descricao,
      data,
      horario,
      fotos
    })

    response.json(newDoacao)
  }

}