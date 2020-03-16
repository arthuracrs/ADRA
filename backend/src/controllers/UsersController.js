const User = require('../models/Users')

module.exports = {
  async store(request, response) {
    console.log(request.body)

    const { username, endereco, cidade, estado } = request.body

    console.log(username, endereco, cidade, estado)
    //@arthurc_bot
    const newUser = await User.create({
      username,
      endereco,
      cidade,
      estado
    })

    response.json(newUser._id)
  }
}