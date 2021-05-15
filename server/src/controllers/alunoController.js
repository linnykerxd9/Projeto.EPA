const Aluno = require('../models').Aluno;
exports.listAll = (req, res) => {
    Aluno.findAll()
    .then(Aluno => res.send(Aluno))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const {
        id,email, nome_completo, telefone, cpf, bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha,saldo } = req.body;
    
        Aluno.create({
        id,email, nome_completo, telefone, cpf,
        bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha,saldo
    })
    .then(aluno => { res.send(aluno) })
    .catch(err => {res.send(err) })
}

exports.listOne = (req, res) => {
  Aluno.findAll({where: {id:req.params.id}})
  .then(Aluno => res.send(Aluno))
  .catch(err => {res.send(err)})

}