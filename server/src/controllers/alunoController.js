const Aluno = require('../models').Aluno;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Aluno.findAll()
    .then(Aluno => res.send(Aluno))
    .catch(err => res.send(err))
}
// Criando o método de inserção dos alunos no banco de dados
exports.createOne = (req, res) => {
    
    const {
        email, nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,sexo, estado, rua,
        contaBanco, senha,saldo } = req.body;
   
    config.findAll({where: {id:1}})
    .then(config => {
   
        var preAluno = config[0].dataValues.preAluno;
        var  ultimoIdAluno = config[0].dataValues.ultimoIdAluno;
        var ultimoIdAluno = ultimoIdAluno + 1;
        var id = `${preAluno}-${ultimoIdAluno}`;
   
        updateIdAluno(ultimoIdAluno);
   
    Aluno.create({
        id,email, nome_completo, telefone, cpf,
        bairro, cep, cidade, dataNascimento,sexo, estado, rua,
        contaBanco, senha,saldo
    })
    .then(aluno => { res.send(aluno) })
    .catch(err => {res.send(err) })
    })
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
  Aluno.findAll(
    {where: {id:req.params.id}})
  .then(Aluno => res.send(Aluno))
  .catch(err => {res.send(err)})

}
exports.getLogin = (req,res) => {
    Aluno.findAll({where:{
        email:req.params.email,
        senha: req.params.senha
    }
    })
    .then(aluno => res.send(aluno))
    .catch(err => res.send(err))
}
exports.updateOne = (req, res) => {
    const {
        email, nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,sexo,sobre, estado, rua,
        contaBanco, senha,saldo } = req.body
    Aluno.update({email,nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,sexo,sobre, estado, rua,
        contaBanco, senha,saldo}, {where: {id: req.params.id}})
    .then(Aluno => {
        res.json({
            message: "Dados do Aluno atualizados com sucesso"
        })
    })
    .catch(err => {res.send(err)})
}

// Criando o metodo de update do aluno para contornar o problema descrito lá em cima
updateIdAluno = (idAluno) => {
     config.update({ultimoIdAluno: idAluno},{where:{id:1}})
}
