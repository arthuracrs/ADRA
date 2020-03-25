//const User = require('../models/Users')
const Doacoes = require('../models/Doacoes')
module.exports = {
    async index(request, response) {

        const { latitude, longitude } = request.query

        const doacoes = await Doacoes.find({ "local_data.location": {
            $near: {
                $geometry: { type: 'Point', coordinates: [latitude, longitude] }, $maxDistance: 10000
            }
        }
        }).populate('doador_data')

        response.json(doacoes)
}
}