const Professor = require('../models').Professor;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Professor.findAll()
    .then(professor => res.send(professor))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const {
        id,email, nome_completo, telefone, cpf, bairro, cep, cidade, dataNascimento,sexo, estado, rua,
        contaBanco, senha } = req.body;
        
        config.findAll({where:{id:1}})
         .then(config => {
            var preProfessor = config[0].dataValues.preProfessor;
            var  ultimoIdProfessor = config[0].dataValues.ultimoIdProfessor;
            var ultimoIdProfessor = ultimoIdProfessor + 1;
            var id = `${preProfessor}-${ultimoIdProfessor}`;
            updateIdProfessor(ultimoIdProfessor);
    Professor.create({
        id,email, nome_completo, telefone, cpf,
        bairro, cep, cidade, dataNascimento,sexo, estado, rua,
        contaBanco, senha
    })
    .then(professor => res.send(professor))
    .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
    Professor.findAll(
        {where: {id:req.params.id},
         include: [
             {model: Professor}

            ]
})
    .then(professor => res.send(professor))
    .catch(err => res.send(err))

}
exports.getLogin = (req,res) => {
    Professor.findAll({where:{
        email:req.params.email,
        senha: req.params.senha
    }
    })
    .then(professor => res.send(professor))
    .catch(err => res.send(err))
}
exports.updateOne = (req, res) => {
    const{email, nome_completo, telefone, cpf,
        bairro, cep, cidade, idade,sexo, estado, rua,
        contaBanco, senha} = req.body
   Professor.update({email, nome_completo, telefone, cpf, 
    bairro, cep, cidade, idade,sexo, estado, rua, contaBanco, 
    senha},{where:{id:req.params.id}})
   .then(professor => res.send(professor))
   .catch(err => res.send(err))

}
updateIdProfessor = (idProfessor) => {
    config.update({ultimoIdProfessor: idProfessor},{where:{id:1}})
}
