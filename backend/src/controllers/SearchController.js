const User = require('../models/Users')

module.exports = {
    async index(request, response) {
        //console.log(request.query)

        const { latitude, longitude } = request.query
        
        const doacoes = await User.find({
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates:[ latitude, longitude]
                    },
                    $maxDistance: 10000
                }
            }
        })
        //console.log(doacoes)
        response.json(doacoes)
    }
}