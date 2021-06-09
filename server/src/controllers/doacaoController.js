const Doacao = require('../models').Doacao;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Doacao.findAll()
    .then(doacao => res.send(doacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idDoador,valor } = req.body;

    config.findAll({where: {id:1}})
    .then(config => {
   
        var preDoacao = config[0].dataValues.preDoacao;
        var  ultimoIdDoacao = config[0].dataValues.ultimoIdDoacao;
        var ultimoIdDoacao = ultimoIdDoacao + 1;
        var id = `${preDoacao}-${ultimoIdDoacao}`;
   
        updateIdDoacao(ultimoIdDoacao);
    Doacao.create({  id,idDoador,valor })
    .then(doacao => res.send(doacao))
    .catch(err => res.send(err))
})
}
updateIdDoacao = (idDoacao) => {
     config.update({ultimoIdDoacao: idDoacao},{where:{id:1}})
}
