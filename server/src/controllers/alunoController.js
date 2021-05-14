const Aluno = require('../models').Aluno;
exports.listAll = (req, res) => {
    Aluno.findAll()
    .then(aluno => res.send(aluno))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const {
        id,email, nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,
        sexo, estado, rua, senha } = req.body;
    
        Aluno.create({
        id,email, nome_completo, telefone, cpf,
        bairro, cep, cidade, dataNascimento, sexo,
        estado, rua, senha
    })
    .then(aluno => res.send(aluno))
    .catch(err => res.send(err))
}