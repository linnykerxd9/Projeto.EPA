const Professor = require('../models').Professor;

exports.listAll = (req, res) => {
    Professor.findAll()
    .then(professor => res.send(professor))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const {
        id,email, nome_completo, telefone, cpf, bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha } = req.body;
    
    Professor.create({
        id,email, nome_completo, telefone, cpf,
        bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha
    })
    .then(professor => res.send(professor))
    .catch(err => res.send(err))
}