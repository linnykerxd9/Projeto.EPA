const Aluno = require('../models').Aluno;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Aluno.findAll()
    .then(Aluno => res.send(Aluno))
    .catch(err => res.send(err))
}
// Criando o método de inserção dos alunos no banco de dados
exports.createOne = (req, res) => {
    // criando uma constante para  filtrar os dados que nós queremos do corpo da requisição (req.body)
    const {
        email, nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,sexo, estado, rua,
        contaBanco, senha,saldo } = req.body;
    /* Chamando o  model da config para recuperar os dados da config e criar o ID do aluno
        e colocando a criação e a atualização do último número dentro dele pois as variáveis são locais
    */
    config.findAll({where:{id:1}})
    .then(config => {
    /* Criando as variáveis para guardar os dados e criar o ID
        preAluno para guardar o prefixo do aluno "ALU"
        ultimoIdAluno para guardar o último id do aluno e depois acrescentar mais 1 na contagem
        id para juntar o prefixo e o último id válido do aluno
    */
        var preAluno = config[0].dataValues.preAluno;
        var  ultimoIdAluno = config[0].dataValues.ultimoIdAluno;
        var ultimoIdAluno = ultimoIdAluno + 1;
        var id = `${preAluno}-${ultimoIdAluno}`;
    /*
        Chamando o método que criei  embaixo do updateOne para dar o update na tabela do último id do aluno
        tive que criar um novoo método porque não dá para se usar dois métodos do mesmo model,
        como por exemplo um update dentro de um select, tive que contornar isso criando outro método 
        e chamando ele aqui. 
    */
        updateIdAluno(ultimoIdAluno);
    // criando o aluno e inserindo ele dentro do banco de dados
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
  Aluno.findAll({where: {id:req.params.id}})
  .then(Aluno => res.send(Aluno))
  .catch(err => {res.send(err)})

}

exports.updateOne = (req, res) => {
    const {
        email, nome_completo, telefone, cpf, bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha,saldo } = req.body
    Aluno.update({email,nome_completo, telefone, cpf, bairro, cep, cidade, idade,sexo, estado, rua,
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
