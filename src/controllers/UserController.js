const User = require('../models/User')

module.exports = {
  async store(request, response) {
    console.log(request.body)
    const { DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status } = request.body

    //procura usuario na base, retorna o obj encontrado ou null
    let user = await User.findOne({ Cpf })

    //caso usuario não existir, um novo usuario sera criado, do contrario, dados do usuario atualizados
    if(!user) {
      console.log("usuario nao encontrato // cadastrar novo")
      user = await User.create({
        dataCad: DataCad,
        cargo: Cargo,
        cpf: Cpf,
        nome: Nome,
        ufNasc: UfNasc,
        salario: Salario,
        status: Status
      })
    }
    else {
     //atualiza dados
     console.log("atualiza dados")
    }

    return response.json(user)
  }
}