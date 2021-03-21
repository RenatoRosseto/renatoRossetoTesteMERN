const User = require('../models/User')

module.exports = {

  async index(request, response) {
    const users = await User.find()

    return response.json(users)
  },

  async store(request, response) {
    console.log(request.body)
    const { DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status } = request.body

    //procura usuario na base, retorna o obj encontrado ou null
    let user = await User.findOne({ Cpf:Cpf })

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
    else { //atualiza dados
     console.log("atualiza dados")
     user = await User.findOneAndUpdate({
      dataCad: DataCad,
      cargo: Cargo,
      cpf: Cpf,
      nome: Nome,
      ufNasc: UfNasc,
      salario: Salario,
      status: Status
    })
    }

    return response.json(user)
  },

  async destroy(request, response) {
    console.log(request.query)
    const { cpf } = request.query
    let mensagem = {mensagem: "Erro ao deletar usuario com cpf: " + cpf}

    const user = await User.findOneAndDelete({ Cpf: cpf }, function(err) {
      if (!err) {
        console.log("Usuario com cpf: " + cpf + " deletado com sucesso!")
        mensagem = {mensagem: "Usuario com cpf: " + cpf + " deletado com sucesso!"}
      }
      else {
        console.log("Erro ao deletar usuario com cpf: " + cpf)
        mensagem = {mensagem: "Erro ao deletar usuario com cpf: " + cpf}
      }
  })

    console.log(user)

    return response.json(mensagem)
  }

}