const mongoose = require('mongoose')

const PointSchema = require('./utils/PointSchema')

const UsersSchema = new mongoose.Schema({
	username: String,
	endereco: String,
	cidade: String,
	estado: String,
	location:{
		type: PointSchema,
		index: '2dsphere'
	}
})

module.exports = mongoose.model("Users", UsersSchema)