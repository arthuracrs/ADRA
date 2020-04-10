const Donations = require('../models/Donations')

module.exports = {
    async index(request, response) {
        try {
            const { latitude, longitude } = request.query

            const donations = await Donations.find({
                "local_data.location": {
                    $near: {
                        $geometry: { type: 'Point', coordinates: [latitude, longitude] },
                        $maxDistance: 10000
                    }
                }
            }).populate('doador_data')
            response.json(donations)
        } catch (error) {
            console.log(error)
        }
    }
}   