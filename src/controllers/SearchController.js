const User = require('../models/User')

module.exports = {

  async index(request, response) {
    console.log(request.query)
    const { dataCad, cargo, cpf, nome, ufNasc, salario, status } = request.query

    const usuarios = await User.find({
      $or:[
        {DataCad: dataCad},
        {Cargo: cargo},
        {Cpf: cpf},
        {Nome: nome},
        {UfNasc: ufNasc},
        {Salario: salario},
        {Status: status},
      ]
    })

    return response.json({ usuarios })
  }

}