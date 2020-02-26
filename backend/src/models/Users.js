const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: String,
	endereco: String,
	cidade: String,
	estado: String
})

module.exports = mongoose.model("User", UserSchema)