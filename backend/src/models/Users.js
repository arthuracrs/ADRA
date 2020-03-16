const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
	username: String,
	endereco: String,
	cidade: String,
	estado: String
})

module.exports = mongoose.model("Users", UsersSchema)