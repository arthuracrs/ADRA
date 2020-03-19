const Doacao = require('../models/Doacoes')

const PointSchema = require('../models/utils/PointSchema')

module.exports = {
  async index(request, response) {
    const queryResult = await Doacao.find().populate('doador_data')

    response.send(queryResult)
  },

  async store(request, response) {

    const {
      doador_id,
      local_data,
      doacao_data
    } = request.body

    //@arthurc_bot
    const newDoacao = await Doacao.create({
      doador_data: doador_id,
      local_data,
      doacao_data
    })

    response.json(newDoacao)
  }
}