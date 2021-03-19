const User = require('../models/User')

module.exports = {
  async store(request, response) {
    console.log(request.body)
    const { DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status } = request.body
  
    const user = await User.create({
      dataCad: DataCad,
      cargo: Cargo,
      cpf: Cpf,
      nome: Nome,
      ufNasc: UfNasc,
      salario: Salario,
      status: Status
    })
  
    return response.json(user)
  }
}