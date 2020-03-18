const User = require('../models/Users')

module.exports = {
  async store(request, response) {

    const { username, endereco, cidade, estado, latitude, longitude } = request.body

    const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    }

    //@arthurc_bot
    const newUser = await User.create({
      username,
      endereco,
      cidade,
      estado,
      location
    })
    response.json(newUser._id)
  }
}