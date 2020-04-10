const Donations = require('../models/Donations')

module.exports = {
  async index(request, response) {
    const queryResult = await Donations.find().populate('doador_data')

    response.send(queryResult)
  },

  async store(request, response) {

    const {
      doador_id,
      local_data,
      doacao_data
    } = request.body

    //@arthurc_bot
    const newDoacao = await Donations.create({
      doador_data: doador_id,
      local_data,
      doacao_data
    })

    response.json(newDoacao)
  }
}