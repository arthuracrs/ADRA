const axios = require('axios')

module.exports = axios.create({
    baseURL: 'http://192.168.1.6:3001/',
})
