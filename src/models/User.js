const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  dataCad: String,
  cargo: String,
  cpf: String,
  nome: String,
  ufNasc: String,
  salario: Number,
  status: String
})

module.exports = mongoose.model('User', UserSchema)